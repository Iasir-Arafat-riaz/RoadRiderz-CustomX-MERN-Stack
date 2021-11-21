import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import "./CheckoutForm.css"

const CheckoutForm = ({ payOrder }) => {
  // console.log(payOrder.name)
  const { charge } = payOrder;
  const stripe = useStripe();
  const elements = useElements();

  const [errorCard,setErrorCard]=useState("")

  

  const [clientSecret,setClientSecret]=useState("")

  useEffect(()=>{
   fetch("http://localhost:5000/create-payment-intent",{
     method:"post",
     headers:{"content-type":"application/json"},
     body:JSON.stringify({charge})
   })
   .then(res=>res.json())
   .then(data=>setClientSecret(data.clientSecret))
  },[charge])

console.log(clientSecret);

  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("[error]", error);
      setErrorCard(error)
    } else {
        setErrorCard("")
      console.log("[PaymentMethod]", paymentMethod);
    }
  };
  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <button className="pay-btn" type="submit" disabled={!stripe}>
          Pay {charge}Tk
        </button>
        <br />
        <p className="text-danger ">{errorCard.message}</p>
        
      </form>
     
    </div>
  );
};

export default CheckoutForm;
