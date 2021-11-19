import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import { useAuth } from "../../../hooks/useAuth";
import "./ManageAllOrder.css";

const ManageAllOrders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const email = user.email;
  //find all my orders
  useEffect(() => {
    const url = `https://mighty-caverns-68467.herokuapp.com/myOrder`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllOrders(data));
  }, []);
  // const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  // const handleOrderId = (id) => {
  //     setOrderId(id);
  //     console.log(id);
  //   };

  //StatusUpdate
  const statusConfirm = (orderId) => {
    setStatus("confirm");
    const updateStatus = { status: status };
    console.log(status, orderId);
    fetch(`https://mighty-caverns-68467.herokuapp.com/manageOrder/${orderId}`, {
      method: "PUT",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updateStatus),
    })
      .then((res) => res.json())
      .then((result) => {
          console.log(result)
             
          Swal.fire('This Order status confirm ') 
          window.location.reload()    
        });
  };

  const remove = (remID) => {
      const confirm = window.confirm("Please Confirm before Delete")
    console.log("delete", remID);
    if(confirm){
        fetch(`https://mighty-caverns-68467.herokuapp.com/manageOrder/${remID}`,{method:"delete"})
    .then(res=>res.json())
    .then(data=>{
        console.log(data.deletedCount)
        if(data.deletedCount){
            const filterRemaining = allOrders.filter(order=>order._id!==remID)
            setAllOrders(filterRemaining)
        }
    })
    }
  };

  return (
    <div style={{paddingBottom:"150px"}}>
      <h2>manage all order section</h2>
      <div className="container">
        <h1>All orders {allOrders.length}</h1>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Ordered Product</th>
              {/* <th>Phone</th> */}
              <th>Status</th>
              <th>confirm</th>
              <th>Action</th>
            </tr>
          </thead>
          {allOrders?.map((order, index) => (
            <tbody key={index}>
              <tr>
                <td>{index}</td>
                <td>{order.name}</td>
                <td>{order.customModel}</td>
                {/* <td>{order.image}</td> */}
                <td>
                  <b>{order.status}
                  {!order.status && "confirm"}</b>
                </td>
                <td>
                  <button
                    className="status-confirm"
                    onClick={() => statusConfirm(order._id)}
                  >
                    Confirm
                  </button>
                </td>
                <td>
                  <button
                    onClick={() => remove(order._id)}
                    className="remove-product"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </div>
  );
};

export default ManageAllOrders;
