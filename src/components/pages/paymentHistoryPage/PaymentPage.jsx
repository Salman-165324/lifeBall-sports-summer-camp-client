import React from "react";
import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const PaymentPage = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold mt-16 ml-3 lg:text-center lg:ml-0">
          Thanks for choosing us. Please pay to get your kid Enrolled.
        </h2>
      </div>
      <Elements stripe={stripePromise}>
        <CheckOutForm></CheckOutForm>
      </Elements>
    </div>
  );
};

export default PaymentPage;
