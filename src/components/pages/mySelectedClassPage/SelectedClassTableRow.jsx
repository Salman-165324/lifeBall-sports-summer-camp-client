import useCartData from "../../../hooks/useCartData";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SelectedClassTableRow = ({ item, index }) => {
  const [, refetch] = useCartData();
  const [axiosSecure] = useAxiosSecure(); 
  const { _id, image, className, price, instructorName, userEmail } = item;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
       
        axiosSecure.delete(`/delete-cart-item/${_id}?userEmail=${userEmail}`)
        .then( res => {
            console.log(res.data)
            if(res.data.deletedCount){
                Swal.fire("Deleted!", "Your file has been deleted.", "success");
                refetch();
            }
        })
        
        
      }
    });
  };
  return (
    <tr>
      <th>
        <label>{index}</label>
      </th>
      <td>
        <div className="flex items-center space-x-3">
          <div className="avatar">
            <div className="mask mask-squircle w-12 h-12">
              <img src={image} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold">{className}</div>
          </div>
        </div>
      </td>
      <td>{instructorName}</td>
      <td className="text-right pr-14"> ${price}</td>
      <td>
        <button
          onClick={handleDelete}
          className="btn btn-outline btn-md lg:btn-sm text-slate-600 font-semibold text-sm "
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default SelectedClassTableRow;
