import { reload } from '@firebase/auth';
import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Product = (props) => {
const {image,model,detail,prod_id,_id,price,origin}=props.product

const removeProduct=()=>{
    const confirm= window.confirm("Are you sure...Delete this product ")
    // console.log("remove now",_id)
    if (confirm){
        fetch(`https://polar-thicket-32932.herokuapp.com/products/${_id}`,{method:"delete"})
    .then(res=>res.json())
    .then(data=>{console.log(data)
    if(data.deletedCount){
        window.location.reload();
    }
    })
    }
    
}
    return (
        <div>
                   <Col >
        <Card className="m-2">
          <Card.Img className="purchase-img" variant="top" src={`data:image/png;base64,${image}`} />
          <Card.Body>
            <Card.Title>
              {" "}
              <h1>{model}</h1>
            </Card.Title>
            <h6>Origin: {origin}</h6>
            <h6><b>Price:{price}</b></h6>
            <Card.Text>
              <p>{detail}</p>
            </Card.Text>
          </Card.Body>
          
          <button className="remove-product" onClick={removeProduct}><b>Remove This Product</b></button>
        </Card>
      </Col>
        </div>
    );
};

export default Product;