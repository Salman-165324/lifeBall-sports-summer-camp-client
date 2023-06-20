import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import React, { useEffect, useState } from "react";
import useAxiosInstance from "../../../hooks/useAxiosInstance";
import useCartData from "../../../hooks/useCartData";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckOutForm = ({ axiosInstance }) => {
  const [clientSecret, setClientSecret] = useState("");
  const [transectionId, setTransactionId] = useState("");
  const [successText, setSuccessText] = useState("");
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [errorText, setErrorText] = useState("");
  const [cartData, refetch] = useCartData();
  const totalPrice = cartData.reduce((sum, item) => sum + item.price, 0);
  const [processing, setProcessing] = useState(false);
  // console.log("Stripe", stripe);

  useEffect(() => {
    if (totalPrice) {
      axiosInstance
        .post("/create-payment-intent", { totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          setClientSecret(res.data.clientSecret);
        });
    }
  }, [totalPrice, axiosInstance]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    setProcessing(true);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      // console.log(error);
      setErrorText(error.message);
    } else {
      // console.log(paymentMethod);
      setErrorText("");
    }

    const {
      paymentIntent,
      error: confirmPaymentError,
    } = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: card,
        billing_details: {
          name: user?.displayName || "anonymous",
          email: user?.email || "unknown",
        },
      },
    });
    if (confirmPaymentError) {
      setErrorText(confirmPaymentError?.message);
      setProcessing(false);
      setSuccessText("");
    }
    console.log(paymentIntent);
    if (paymentIntent.status == "succeeded") {
      setProcessing(false);
      setTransactionId(paymentIntent.id);
      setSuccessText(`Congratulations! You payment is successful.`);
      setErrorText("");
      // todo: Find out why it isn't working in here
      refetch();

      const paymentData = {
        transectionId: paymentIntent.id,
        email: user?.email,
        cartItemsId: cartData.map((cartItem) => cartItem._id),
        orderedClassesId: cartData.map((cartItem) => cartItem.classId),
        date: new Date(),
        amount: totalPrice,
        className: cartData.map((cartItem) => cartItem.className),
      };

      axiosInstance
        .post("/payments", paymentData)
        .then((res) => {
          console.log(res.data);
          refetch();
          // todo: remove this refetch from here. If other refetch() from above works.
        })
        .catch((error) => {
          console.log(error);
          //  todo: redirect to a new page to show success status and clean the form.
          setErrorText(
            "Something went wrong savig to payment to database. Don't worry contact support with your transactionId"
          );
        });
    }
  };
  return (
    <div className="lg:w-1/2 px-2 mx-auto mt-16">
      <div>
        <p className="text-3xl my-5">To pay: ${totalPrice}</p>
      </div>
      <form
        className=" border-2 border-green-950 p-6 rounded-lg"
        onSubmit={handleSubmit}
      >
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
        <button
          className="btn bg-green-900 hover:bg-green-950 text-white btn-sm mt-5"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          Pay
        </button>
      </form>
      {errorText && (
        <p className="mt-2 pl-1 text-red-500 font-semibold">{errorText}</p>
      )}
      {successText && (
        <p className="mt-2 pl-1 text-green-700 font-semibold">
          {successText} Transaction ID: ${transectionId}
        </p>
      )}
    </div>
  );
};

export default CheckOutForm;