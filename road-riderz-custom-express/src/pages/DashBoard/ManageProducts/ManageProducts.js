import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from './Product/Product';

const ManageProducts = () => {
    const [manageProducts, setManageProducts] = useState([]);
  useEffect(() => {
    fetch("https://mighty-caverns-68467.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, []);
  

  console.log(manageProducts);
    return (
        <div style={{paddingBottom:"150px"}}>
            <h3>Manage ProDUCts Sections</h3>
            <Row xs={1} md={2} className="g-4 m-3">
          {manageProducts.map((product) => (
            <Product key={product._id} product={product}></Product>
          ))}
        </Row>
        </div>
    );
};

export default ManageProducts;