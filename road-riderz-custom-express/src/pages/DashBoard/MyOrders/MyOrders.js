import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../../hooks/useAuth";
import "./MyOrder.css";

const MyOrders = () => {
  const [myOrders, setMyOrder] = useState([]);
  const { user } = useAuth();
  const email = user.email;
  //find all my orders
  useEffect(() => {
    const url = `https://mighty-caverns-68467.herokuapp.com/myOrder`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMyOrder(data));
  }, []);

  const onlyMyOrder = myOrders.filter((ownOrder) => ownOrder.email === email);
  console.log(onlyMyOrder);

  const cancelOrder = (id) => {
    const confirmation = window.confirm("Are you sure delete this order");
    if (confirmation) {
      fetch(`https://mighty-caverns-68467.herokuapp.com/myOrder/${id}`, {
        method: "delete",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount) {
            const remainingOrders = onlyMyOrder.filter(
              (rest) => rest._id !== id
            );
            console.log(remainingOrders);
            setMyOrder(remainingOrders);
          }
        });
    }
  };

  return (
    <div className="only-My-Order">
      <h2 className="my-order-header">
        <b>Here Show Your Confirmed Order</b>
      </h2>
      <div className="myOrder-Div ">
        {onlyMyOrder.map((orderInfo) => (
          <div className="my-order" key={orderInfo._id}>
            <div>
              <img  src={`data:image/png;base64,${orderInfo?.image}`} alt="" />
              <h4>Name:{orderInfo.name}</h4>
              <h5>Email : {orderInfo.email}</h5>
              <h6>Address: {orderInfo.address}</h6>
              <h6>Contact No: {orderInfo?.phone}</h6>
              <h6>Ordered Custom Bike: {orderInfo.customModel}</h6>
              <h6> Total Advance: {orderInfo.charge}TK</h6>
              <h6> Order placed: {orderInfo.orderDate}</h6>
              <h6>
                Order Status:
                <b>{!orderInfo.status ? "confirm" : orderInfo.status}</b>
              </h6>
              <button
                onClick={() => cancelOrder(orderInfo._id)}
                className="btn btn-danger mt-3"
              >
                Remove Order
              </button>
              {!orderInfo.payment ? (
                <Link to={`/dashboard/MyOrders/${orderInfo._id}`}>
                  {" "}
                  <button className="btn btn-success mt-3 m-1">Pay</button>
                </Link>
              ) : (
                <button disabled className="btn btn-warning mt-3 m-1" type="">
                  Paid
                </button>
              )}
              {console.log(orderInfo?.payment)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyOrders;
