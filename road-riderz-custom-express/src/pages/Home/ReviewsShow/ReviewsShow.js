import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleReview from './SingleReview/SingleReview';

const ReviewsShow = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch("https://polar-thicket-32932.herokuapp.com/reviews")
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    console.log(reviews)
    return (
        <div>
            <h2 className="common-header"> Customer Review</h2>
            <Row xs={1} md={5} className="g-4 m-3">
          {reviews.map((review, index) => (
            <SingleReview review={review} key={index}></SingleReview>
          ))}
        </Row>

            {/* <div className="row">
                {
                    reviews.map(rev=><div>
                         <div className="col-md-3 col-sm-6">
                   
                    </div>
                    </div>)
                }
               
                
            </div> */}
        </div>
    );
};

export default ReviewsShow;