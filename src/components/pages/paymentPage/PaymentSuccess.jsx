import { Link, useLocation } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

/**
 * Shown after a successful payment. Displays transaction ID, amount,
 * and enrolled classes. If visited without state (e.g. direct URL),
 * shows a generic success message with links.
 */
const PaymentSuccess = () => {
  const location = useLocation();
  const state = location.state;

  // User may land here without state if they bookmark or refresh
  const transactionId = state?.transactionId;
  const amount = state?.amount;
  const classNames = state?.classNames ?? [];

  return (
    <div className="max-w-xl mx-auto">
      <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-lg text-center">
        {/* Success icon */}
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
          <FaCheckCircle className="h-10 w-10" />
        </div>

        <h1 className="text-2xl font-bold text-slate-800">
          Payment successful
        </h1>
        <p className="mt-2 text-slate-600">
          Your child is enrolled. Thank you for choosing us.
        </p>

        {/* Details card – only show when we have state from redirect */}
        {(transactionId != null || amount != null) && (
          <div className="mt-6 rounded-xl bg-slate-50 p-4 text-left">
            {amount != null && (
              <p className="text-slate-700">
                <span className="font-medium text-slate-500">Amount paid</span>
                <span className="ml-2 font-semibold text-emerald-700">
                  ${Number(amount).toFixed(2)}
                </span>
              </p>
            )}
            {transactionId && (
              <p className="mt-2 text-slate-700 break-all">
                <span className="font-medium text-slate-500">
                  Transaction ID
                </span>
                <span className="ml-2 text-sm font-mono text-slate-800">
                  {transactionId}
                </span>
              </p>
            )}
            {Array.isArray(classNames) && classNames.length > 0 && (
              <div className="mt-3">
                <p className="font-medium text-slate-500">Enrolled classes</p>
                <ul className="mt-1 list-inside list-disc text-slate-700 text-sm">
                  {classNames.map((name, i) => (
                    <li key={i}>{name}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        {/* Actions */}
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            to="/dashboard/enrolled-classes"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            View enrolled classes
          </Link>
          <Link
            to="/dashboard/payment-history"
            className="inline-flex items-center justify-center rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-700 hover:bg-slate-50"
          >
            Payment history
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccess;
