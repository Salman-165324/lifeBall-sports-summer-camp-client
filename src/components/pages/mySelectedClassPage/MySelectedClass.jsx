
import useCartData from "../../../hooks/useCartData";
import SelectedClassTableRow from "./SelectedClassTableRow";

const MySelectedClass = () => {
  const [cartData] = useCartData();
  console.log(" MY Cart Data",cartData);
  const totalPay = cartData.reduce((sum, item) => sum + item.price, 0);
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold mt-16 ml-3 lg:text-center lg:ml-0">
          My Selected Classes
        </h2>
      </div>
      <div className="ml-8 mt-16 text-3xl flex gap-10 items-center">
        <div className="">Total Pay: ${totalPay}</div>
        <button className="px-6 btn bg-green-900 hover:bg-green-950 text-white">
          Pay
        </button>
      </div>
      {/* Table */}
      <div className="mt-10 px-5 overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class</th>
              <th>Instructor</th>
              <th className="text-right pr-14">Price</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {cartData.map((item, index) => (
              <SelectedClassTableRow
                key={item._id}
                item={item}
                index={index + 1}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MySelectedClass;
