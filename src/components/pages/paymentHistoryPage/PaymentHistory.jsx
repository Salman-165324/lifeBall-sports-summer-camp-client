import useAuth from "../../../hooks/useAuth";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import PaymentHistoryTable from "./PaymentHistoryTable";

const PaymentHistory = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    axiosSecure("/payment-history").then((res) => {
      console.log(res.data);
      setPaymentData(res.data);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <div>
        {/* Todo: Make this headlines a separate component */}
        <h2 className="text-4xl font-bold mt-16 ml-3 lg:text-center lg:ml-0">
          Hello {user?.displayName}! This in your payment history.
        </h2>
      </div>
      <div className="overflow-x-auto px-6 mt-10">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Transaction Id</th>
              <th>Amount</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map((item, index) => (
              <PaymentHistoryTable
                key={item._id}
                item={item}
                index={index}
              ></PaymentHistoryTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
