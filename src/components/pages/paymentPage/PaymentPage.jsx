import CheckOutForm from "./CheckOutForm";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

/**
 * Payment page wrapper: loads Stripe and renders the checkout form
 * inside a modern, centered card layout.
 */
const PaymentPage = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK);

  return (
    <div className="max-w-2xl mx-auto">
      {/* Page header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-slate-800 tracking-tight">
          Complete
        </h1>
        <p className="mt-2 text-slate-600">
          Thanks for choosing us. Pay securely below to enroll your child.
        </p>
      </div>

      {/* Stripe Elements wrapper – form lives inside CheckOutForm */}
      <Elements stripe={stripePromise}>
        <CheckOutForm />
      </Elements>
    </div>
  );
};

export default PaymentPage;
