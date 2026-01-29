import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCartData from "../../../hooks/useCartData";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

/**
 * Stripe card input styling – matches dashboard emerald/slate theme.
 * Used for CardElement options.
 */
const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      fontSize: "16px",
      color: "#334155",
      fontFamily: "Poppins, system-ui, sans-serif",
      "::placeholder": {
        color: "#94a3b8",
      },
      iconColor: "#059669",
    },
    invalid: {
      color: "#dc2626",
      iconColor: "#dc2626",
    },
  },
};

const CheckOutForm = () => {
  const [clientSecret, setClientSecret] = useState("");
  const [errorText, setErrorText] = useState("");
  const { user } = useAuth();
  const stripe = useStripe();
  const elements = useElements();
  const [cartData, refetch, isCartLoading] = useCartData();
  const totalPrice = cartData.reduce((sum, item) => sum + item.price, 0);
  const [processing, setProcessing] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const navigate = useNavigate();

  useEffect(() => {
    if (isCartLoading) return;

    if (totalPrice > 0) {
      axiosSecure
        .post("/create-payment-intent", { totalPrice })
        .then((res) => {
          setClientSecret(res.data.clientSecret);
          setErrorText("");
          setProcessing(false);
        })
        .catch((error) => {
          setErrorText(
            "Error creating payment. Please try again or reload the page."
          );
          console.log("Create payment intent error", error);
        });
    } else {
      setErrorText("Your cart is empty. Add classes before paying.");
      setClientSecret("");
      setProcessing(false);
    }
  }, [totalPrice, axiosSecure, isCartLoading]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) return;

    const card = elements.getElement(CardElement);
    if (card == null) return;

    setProcessing(true);
    setErrorText("");

    const { error: methodError } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (methodError) {
      setErrorText(methodError.message);
      setProcessing(false);
      return;
    }

    const { paymentIntent, error: confirmPaymentError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: user?.displayName || "Guest",
            email: user?.email || "unknown",
          },
        },
      });

    if (confirmPaymentError) {
      console.error("Error confirming payment:", confirmPaymentError);
      setErrorText(
        "Payment could not be completed. Please check your card and try again."
      );
      setProcessing(false);
      return;
    }

    if (paymentIntent?.status === "succeeded") {
      setProcessing(false);
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
        .then(() => {
          refetch();
          // Redirect to success page with data for display
          navigate("/dashboard/payment/success", {
            state: {
              transactionId: paymentIntent.id,
              amount: totalPrice,
              classNames: paymentData.className,
            },
          });
        })
        .catch((error) => {
          console.error(error);
          setErrorText(
            "Payment succeeded but we couldn't save the record. Please contact support with transaction ID: " +
              paymentIntent.id
          );
        });
    }
  };

  const isSubmitDisabled =
    !stripe || !clientSecret || processing || isCartLoading || totalPrice <= 0;

  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-lg sm:p-8">
      {/* Amount due */}
      <div className="mb-6 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3">
        <span className="text-slate-600">Amount due</span>
        <span className="text-2xl font-bold text-emerald-700">
          ${isCartLoading ? "—" : totalPrice.toFixed(2)}
        </span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Card details label */}
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">
            Card details
          </label>
          <div className="rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 transition-colors focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20">
            <CardElement options={CARD_ELEMENT_OPTIONS} />
          </div>
        </div>

        {/* Error message */}
        {errorText && (
          <p className="rounded-lg bg-red-50 px-4 py-2 text-sm font-medium text-red-700">
            {errorText}
          </p>
        )}

        {/* Submit button */}
        <button
          type="submit"
          disabled={isSubmitDisabled}
          className="w-full rounded-xl bg-emerald-600 py-3 px-4 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-700 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {processing
            ? "Processing…"
            : `Pay $${totalPrice > 0 ? totalPrice.toFixed(2) : "0.00"}`}
        </button>
      </form>
    </div>
  );
};

export default CheckOutForm;
