import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./AddProduct.css";
import Swal from "sweetalert2";



const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    //   const dataobject ={bookingInfo:     }
    axios.post("https://mighty-caverns-68467.herokuapp.com/products", data).then((res) => {
      console.log(res.status);
      if (res.status === 200) {
        Swal.fire('New Product successfully added')
        reset();
      }
    });

  };
  return (
    <div className="add-product">
      <h2 className="addProduct-header">You Can Add New Product</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          required
          placeholder="enter customize Motorbike ID"
          type="number"
          {...register("prod_id")}
        />
        <input
          required
          placeholder="enter customize Motorbike Model"
          {...register("model")}
        />
        <textarea
          required
          placeholder="enter description about customize Motorbike"
          {...register("detail")}
        />

        <input
          required
          placeholder="enter exact price of customize Motorbike"
          type="number"
          {...register("price")}
        />
        <input
          required
          placeholder="enter original bike origin & model"
          {...register("origin")}
        />
        <input
          required
          placeholder="you can submit photo, must need customize Motorbike url  "
          {...register("image")}
        />

        <input className="bg-danger" type="submit" value="ADD" />
      </form>
    </div>
  );
};

export default AddProduct;
