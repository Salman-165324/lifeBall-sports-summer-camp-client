import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useCartData from "../../../hooks/useCartData";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const CheckOutForm = () => {
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
  const [axiosSecure] = useAxiosSecure();
  
  // console.log("Stripe", stripe);
  console.log("Axios Instance", axiosSecure);
  useEffect(() => {
    console.log("Inside UseEffect", totalPrice);
    if (totalPrice !== null && totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { totalPrice })
        .then((res) => {
          console.log(res.data.clientSecret);
          console.log("Inside AxiosInstance");
          setClientSecret(res.data.clientSecret);
          setErrorText("")
          setProcessing(false)
        })
        .catch((error) => {
          // Handle any errors during PaymentIntent creation
          setErrorText("Error creating PaymentIntent. Please try again or reload the page.");
          console.log("Create payment intent error", error);
        });
    } else {
      // Handle totalPrice being zero or null (e.g., empty cart)
      setErrorText("Your Cart is empty.");
      setProcessing(true)
    }
  }, [totalPrice, axiosSecure]);

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
    const { error} = await stripe.createPaymentMethod({
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
      console.error("Error confirming payment:", confirmPaymentError);
      setErrorText("Error confirming payment. Please try again or reload the page.");
      setProcessing(false);
      setSuccessText("");
    }
    // console.log(paymentIntent);
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

      axiosSecure
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
            "Something went wrong saving your payment to database. Don't worry contact support with your transactionId"
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
      {successText && (
        <p className="mt-2 pl-1 text-green-700 font-semibold">
          {successText} Transaction ID: ${transectionId}
        </p>
      )}
      {errorText && (
        <p className="mt-2 pl-1 text-red-500 font-semibold">{errorText}</p>
      )}
    
    </div>
  );
};

export default CheckOutForm;
