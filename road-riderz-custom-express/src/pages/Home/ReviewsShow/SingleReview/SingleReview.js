import React from 'react';
import { Card, Col } from 'react-bootstrap';
import "./SingleReview.css"

const SingleReview = (props) => {
 const {name,email,rating,cmnt}=props.review
 const comment= cmnt.slice(0,40)
 const cmommentFig = `${comment}.....`

    return (
        <div >
            <Col >
        <Card id="rev" className="singleReview">
         
          <Card.Body>
            <Card.Title>
              {" "}
              <h4>{name}</h4>
            </Card.Title>
            <Card.Title>
              {" "}
              <h6>{email}</h6>
            </Card.Title>
            <Card.Text>
              <p>{cmommentFig}</p>
            </Card.Text>
            <b>rated us {rating} Start</b>
          </Card.Body>
         
         
          
         
        </Card>
      </Col>
        </div>
    );
};

export default SingleReview;