import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import axios from "axios";
import "./Purchase.css";
import { useAuth } from "../../hooks/useAuth";
import { Alert } from "react-bootstrap";
import Swal from "sweetalert2";
import Loading from "../shared/Loading/Loading";

const Purchase = () => {
  //receive data from useAuth
  const [load, setLoad]=useState(true)
  const { user } = useAuth();

  const { email, displayName } = user;

  const { register, handleSubmit, reset } = useForm();
  const [purchaseProduct, setPurchaseProduct] = useState({});
  const { id } = useParams();
  // console.log(id);
  useEffect(() => {
    setLoad(true)
    fetch(`https://polar-thicket-32932.herokuapp.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPurchaseProduct(data)
        setLoad(false)
      });
      
  }, []);
  const { model, image, origin, prod_id, detail, price } = purchaseProduct;

  const onSubmit = (data) => {
    const date = new Date();
    const localDate = date.toLocaleDateString();
    data.orderDate = localDate;
    data.status = "pending";
console.log(data);

const formData = new FormData();
    formData.append("name", data.name);
    formData.append("email", data.email );
    formData.append("orderDate", data.orderDate);
    formData.append("charge", data.charge);
    formData.append("address", data.address);
    formData.append("customModel", data.customModel);
    formData.append("phone", data.phone);
    formData.append("status", data.status);
    formData.append("image", data.image);


fetch("https://polar-thicket-32932.herokuapp.com/order", {
      method: "post",
     
      body: formData,
    })
      .then((res) => res.json())
      .then((result) => {console.log(result)
      if(result.insertedId){
        Swal.fire("Order Place Successfully");
          reset();
      }
      });



    
  };

  if(load){
    return (<Loading/>)
  }

  return (
    <div className="purchase">
      <div className="row">
        <div className="col-md-6 col-sm-12 col-12">
          <div className="prodDetail">
            <h4>Custom Model: X-100{prod_id}</h4>
            <img  src={`data:image/png;base64,${image}`} alt=""></img>
            <h3>{model}</h3>
            <h5>
              <b>Original Model: {origin}</b>
            </h5>
            <h5>
              <b>Fixed Price: {price}TK</b>
            </h5>
            <p className="detail">
              <b>{detail}</b>
            </p>
          </div>
        </div>
        <div className="col-md-6 col-sm-12 col-12 purchase-form">
          <h2>Fill form and purchase</h2>
          {image&& <form onSubmit={handleSubmit(onSubmit)}>
            <input
              value={displayName}
              required
              placeholder="enter your name"
              {...register("name", { required: true, maxLength: 20 })}
            />
            <input
              value={email}
              required
              // placeholder="enter your email"
              {...register("email")}
            />
            <input
              required
              placeholder="enter your address"
              {...register("address")}
            />
            <input
              required
              value={image}
              
              {...register("image")}
            />
            <input
              required
              placeholder="enter your contact number"
              type="number"
              {...register("phone")}
            />
            <input
              required
              value={model}
              // placeholder="enter Customize bike name"
              {...register("customModel")}
            />
            <input
              required
              // placeholder="enter advance amount"
              value={price}
              type="number"
              {...register("charge")}
            />
            <br />

            <input className="bg-warning" type="submit" value="Order" />
          </form>}
        </div>
      </div>
    </div>
  );
};

export default Purchase;
