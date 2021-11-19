import React, { useEffect } from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import "./SingleProduct.css"
import { useHistory } from 'react-router';

const SingleProduct = (props) => {
    const {image,model,detail,_id}= props.product
    const history = useHistory()

    const purchase=()=>{
    history.push(`/purchase/${_id}`)
    }
    return (
        <div>
            
            <Col >
        <Card className="m-2">
          <Card.Img className="purchase-img" variant="top" src={image} />
          <Card.Body>
            <Card.Title>
              {" "}
              <h1>{model}</h1>
            </Card.Title>
            <Card.Text>
              <p>{detail}</p>
            </Card.Text>
          </Card.Body>
          
          <button className="purchaseButton" onClick={purchase}><b>Purchase <FontAwesomeIcon icon={faMotorcycle} /></b></button>
        </Card>
      </Col>
        </div>
    );
};

export default SingleProduct;