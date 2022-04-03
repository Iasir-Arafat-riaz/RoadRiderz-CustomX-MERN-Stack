const { MongoClient } = require("mongodb");
const express = require("express");
const fileUpload = require("express-fileupload");
const cors = require("cors");
require("dotenv").config();
const ObjectId = require("mongodb").ObjectId;
const app = express();
const port = process.env.PORT || 5000;

//fOR Stripe (payment get-way)
const stripe = require("stripe")(process.env.STRIPE_SECRET);
// console.log(stripe);

//Middle ware
app.use(cors());
app.use(express.json());
app.use(fileUpload());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.gukqi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function run() {
  try {
    await client.connect();
    const database = client.db("RoadRiderz-Custom-X");
    const allProducts = database.collection("All-Products");
    const orders = database.collection("orders");
    const reviews = database.collection("reviews");
    const users = database.collection("users");

    // create a document to insert -Add new Products
    app.post("/products", async (req, res) => {
      console.log("body", req.body);
      console.log("files", req.files);
      const prod_id = req.body.prod_id;
      const model = req.body.model;
      const detail = req.body.detail;
      const price = req.body.price;
      const origin = req.body.origin;

      const pic = req.files.image;
      const picData = pic.data;
      const encodePic = picData.toString("base64")
      const imageBuffer = Buffer.from(encodePic,"base64")
      // const query = req.body;
      const products= {prod_id,model,detail,price,origin,image:imageBuffer}
      console.log(products);
      const result = await allProducts.insertOne(products);
      res.json(result);
    });

    //Find all products from DB
    app.get("/products", async (req, res) => {
      const query = {};
      const cursor = allProducts.find(query);
      const result = await cursor.toArray();
      // res.send(result)
      res.json(result);
    });

    //Find single Product
    app.get("/products/:id", async (req, res) => {
      console.log(req.params.id);
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await allProducts.findOne(query);
      res.json(result);
    });

    //delet single product
    app.delete("/products/:id", async (req, res) => {
      // console.log(req.params.id)
      const id = req.params.id;
      const remove = { _id: ObjectId(id) };
      const restOrder = await allProducts.deleteOne(remove);
      res.json(restOrder);
    });

    //user orders Post
    app.post("/order", async (req, res) => {
      console.log("body",req.body);
      const result = await orders.insertOne(req.body);
      res.json(result);
    });

    //my order Find

    //   app.get("/myOrder",async(req,res)=>{
    // const email= req.query.email
    // //  console.log(req.query?.email)
    // const filter = {email:email}
    // const result = await orders.find(filter).toArray()
    // res.json(result)

    //   })

    //filter apply in client side MyOrder Component :)
    app.get("/myOrder", async (req, res) => {
      const filter = {};
      const result = await orders.find(filter).toArray();
      res.json(result);
    });

    //find single order for payment.... get operation
    app.get("/myOrder/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: ObjectId(id) };
      const result = await orders.findOne(query);
      res.json(result);
    });

    //for payment getway
    app.put("/myOrder/payment/:id", async (req, res) => {
      const id = req.params.id;

      const payment = req.body;
      const filter = { _id: ObjectId(id) };
      const doc = {
        $set: { payment: payment },
      };
      console.log(doc);
      const result = await orders.updateOne(filter, doc);
      res.json(result);
    });

    //Delete operation -MyOrder
    app.delete("/myOrder/:id", async (req, res) => {
      const id = req.params.id;
      const remove = { _id: ObjectId(id) };
      const restOrder = await orders.deleteOne(remove);
      res.json(restOrder);
    });

    //mange order operation Status update
    app.put("/manageOrder/:id", async (req, res) => {
      console.log(req.params.id, req.body);
      const filter = { _id: ObjectId(req.params.id) };
      // console.log(req.params.id);
      const result = await orders.updateOne(filter, {
        $set: {
          status: req.body.status,
        },
      });
      res.json(result);
    });

    //manage order operation - order delete
    app.delete("/manageOrder/:id", async (req, res) => {
      console.log(req.params.id);
      const id = req.params.id;
      const removeProduct = { _id: ObjectId(id) };
      const restOrder = await orders.deleteOne(removeProduct);
      res.json(restOrder);
    });

    //userReviewPost
    app.post("/reviews", async (req, res) => {
      const review = req.body;
      const result = await reviews.insertOne(review);
      res.json(result);
    });

    //userReviewGet
    app.get("/reviews", async (req, res) => {
      const result = await reviews.find({}).toArray();
      res.json(result);
    });

    //post operation for all user
    app.post("/users", async (req, res) => {
      const user = req.body;

      const result = await users.insertOne(user);
      console.log(result);
      res.json(result);
    });

    //update operation fro users (Upsert)
    app.put("/users", async (req, res) => {
      const user = req.body;
      const filter = { email: user.email };
      const option = { upsert: true };
      const updateDoc = { $set: user };
      const result = await users.updateOne(filter, updateDoc, option);
      res.json(result);
    });

    //Set Admin Role
    app.put("/users/admin", async (req, res) => {
      const user = req.body;
      console.log(user);
      const filter = { email: user.email };
      const updateDoc = { $set: { role: "admin" } };
      const result = await users.updateOne(filter, updateDoc);
      res.json(result);
    });

    // check admin for website access (get operation)
    app.get("/users/:email", async (req, res) => {
      const email = req.params.email;
      const query = { email: email };
      const user = await users.findOne(query);
      let isAdmin = false;
      if (user?.role === "admin") {
        isAdmin = true;
      }
      res.json({ admin: isAdmin });
    });

    //For payment getway

    app.post("/create-payment-intent", async (req, res) => {
      const paymentInfo = req.body;
      const payment = paymentInfo.charge * 100;
      // console.log(paymentInfo, payment);
      const paymentIntent = await stripe.paymentIntents.create({
        currency: "usd",
        amount: payment,
        // payment_methods_types: {
        //   enabled: true,
        // },
        payment_method_types: ["card"],
      });
      res.json({
        clientSecret: paymentIntent.client_secret,
      });
    });
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("RRZ custom express server is running yoyoyo");
});

app.listen(port, () => {
  console.log("listening to this port", port);
});

//-----------THANKS TO YOU FOR YOUR TIME AND SUPPORT--------------


