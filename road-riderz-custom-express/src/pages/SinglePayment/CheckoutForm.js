import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import "./CheckoutForm.css"

const CheckoutForm = ({ payOrder }) => {
  // console.log(payOrder.name)
  const { charge,displayName,email,_id } = payOrder;
  const stripe = useStripe();
  const elements = useElements();

  //for error
  const [errorCard,setErrorCard]=useState("")

  //for success
  const [success,setSuccess]=useState("")
  const [processing,setProcessing]=useState(false)
  

  const [clientSecret,setClientSecret]=useState("")

  useEffect(()=>{
   fetch("https://mighty-caverns-68467.herokuapp.com/create-payment-intent",{
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
    setProcessing(true)

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
      setSuccess("")
      setErrorCard(error)
    } else {
        setErrorCard("")
      console.log("[PaymentMethod]", paymentMethod);
    }
//Payment Intent
const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
  clientSecret,
  {
    payment_method: {
      card: card,
      billing_details: {
        name: displayName,
        email:email
      },
    },
  },
);
if(intentError){
  setErrorCard(intentError)
  setSuccess("")
}
else{
  setSuccess("Your Payment Processed Successfully")
  console.log(paymentIntent);
  setProcessing(false)
const payment={
  amount:paymentIntent.amount,
  transiction:paymentIntent.client_secret.split("_secret")[0],
  created:paymentIntent.created,
  lastFour:paymentMethod.card.lst4
}
  fetch(`https://mighty-caverns-68467.herokuapp.com/myOrder/payment/${_id}`,{
    method:"put",
    headers:{"content-type":"application/json"},
    body:JSON.stringify(payment)
  })
  .then(res=>res.json())
  .then(data=>console.log(data))
}
setProcessing(false)
  };
  return (
    <div className="checkout">
      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "18px",
                color: "#424770",
                "::placeholder": {
                  color: "gray",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        
        {processing?<Spinner animation="border" variant="info" />:<button className="pay-btn" type="submit" disabled={!stripe||success}>
          Pay {charge}Tk
        </button>}
        <br />
        <p className="text-danger "><b>{errorCard.message}</b></p>
        <p className="text-success"><b>{success}</b></p>
        
      </form>
     
    </div>
  );
};

export default CheckoutForm;
