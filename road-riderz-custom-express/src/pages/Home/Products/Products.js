import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import SingleProduct from "./SingleProduct/SingleProduct";
import "./Products.css";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://polar-thicket-32932.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);
  console.log(products);
  const heilightingProducts = products.slice(0, 9);
  console.log(heilightingProducts);
  return (
    <div>
      <div className="custom-product">
        <h2 className="common-header">Our Latest Customize Bike</h2>
        <Row xs={1} md={3} className="g-4 m-3">
          {heilightingProducts.map((product, index) => (
            <SingleProduct key={index} product={product}></SingleProduct>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
