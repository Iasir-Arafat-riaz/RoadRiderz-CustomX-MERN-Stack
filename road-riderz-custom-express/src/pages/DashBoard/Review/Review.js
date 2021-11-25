import axios from 'axios';
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { useAuth } from '../../../hooks/useAuth';
import "./Review.css"



const Review = () => {
    const {user}=useAuth()
const [rating,setRating]=useState(1)
const [userComment,setUserComment]=useState("")

//Comment Field
const comments=(e)=>{
    setUserComment(e.target.value)
}

const ratingOne=()=>{
    setRating(1)
}
const ratingTwo=()=>{
    setRating(2)
}
const ratingThree=()=>{
    setRating(3)
}
const ratingFour=()=>{
    setRating(4)
}
const ratingFive=()=>{
    setRating(5)
}
console.log(rating);


    const reviewForm=()=>{
        // e.preventDefault()
      const commentObject = {name:user.displayName, email:user.email,cmnt:userComment,rating:rating}
      console.log(commentObject)
      axios.post("https://polar-thicket-32932.herokuapp.com/reviews", commentObject).then((res) => {
        console.log(res.status);
        if (res.status === 200) {
            setUserComment("")
          Swal.fire('Your Review Submitted')
          
        }
      });
    }
    return (
        <div className="review">
            <h3 >Here write your review </h3>
           
            <textarea required placeholder="Please Share Your Valuable Review" onBlur={comments} name="" id="" cols="15" rows="5"></textarea>
            <br/>
            <button onClick={ratingOne} className="reviewBtn">1</button>
            <button onClick={ratingTwo}  className="reviewBtn">2</button>
            <button onClick={ratingThree} className="reviewBtn">3</button>
            <button onClick={ratingFour} className="reviewBtn">4</button>
            <button onClick={ratingFive} className="reviewBtn">5</button>
            <br/>
            <button className="reviewSubmit" onClick={reviewForm}>Review</button>
            
        </div>
    );
};

export default Review;