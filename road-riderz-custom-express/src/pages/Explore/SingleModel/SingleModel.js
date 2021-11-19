import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons'
import { useHistory, useParams } from 'react-router';

const SingleModel = (props) => {
    const {image,model,detail,prod_id,_id,price,origin}=props.model
    const {id}=useParams()
    const history =useHistory()

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
            <h6>Origin: {origin}</h6>
            <h6><b>Price:{price}</b></h6>
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

export default SingleModel;