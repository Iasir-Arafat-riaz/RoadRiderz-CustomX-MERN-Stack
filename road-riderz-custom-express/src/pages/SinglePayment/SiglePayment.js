import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import CheckoutForm from "./CheckoutForm";


const stripePromise = loadStripe(
    "pk_test_51JwBsrLtD8lCnen0GWjPNaljOlPu81tDQft3nmENv8Pqul2wYkCknrziG5EdfI1aoyqEI7T5n7ynTLmzfeHq1eJy00KRjee3RW"
  );

const SinglePayment = () => {
  const [payOrder, setPayOrder] = useState({});
  const { id } = useParams();
  useEffect(() => {
    fetch(`https://mighty-caverns-68467.herokuapp.com/myOrder/${id}`)
      .then((res) => res.json())
      .then((data) => setPayOrder(data));
  }, []);
  console.log(payOrder);

  
  return (
    <div style={{marginTop:"40px"}}>
      <h1>Payment with STRIPE</h1>
      {payOrder?.charge &&<Elements stripe={stripePromise}>
          <CheckoutForm  payOrder={payOrder}></CheckoutForm>
      </Elements>}
    </div>
  );
};

export default SinglePayment;

//-----------Thanks--------