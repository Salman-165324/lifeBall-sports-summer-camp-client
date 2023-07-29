import { toast } from "react-hot-toast";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useFindUserRole from "../../hooks/useFindUserRole";
import { useEffect } from "react";
import { useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCartData from "../../hooks/useCartData";

const AddToCartBtn = ({ singleClass }) => {
  const { user } = useAuth();
  const [userRole] = useFindUserRole();
  const [isDisable, setIsDisable] = useState(false);
  const [axiosSecure] = useAxiosSecure();
  const [cartData, refetch] = useCartData();

  useEffect(() => {
    switch (userRole) {
      case "admin":
        setIsDisable(true);
        break;
      case "instructor":
        setIsDisable(true);
        break;
      default:
        setIsDisable(false);
    }

    if (singleClass.availableSeats < 1) {
      setIsDisable(true);
    }
  }, [userRole, singleClass.availableSeats]);

  const handleSelectClass = () => {
    console.log("Clicked Class Btn");
    if (!user) {
      Swal.fire({
        title: "You Need to login first",
        icon: "info",

        showCloseButton: true,
        showCancelButton: true,
        focusConfirm: false,
        confirmButtonText: '<i class="fa fa-thumbs-up"></i> Login!',
        confirmButtonAriaLabel: "Login!",
      }).then((result) => {
        if (result.isConfirmed) {
          Navigate("/login");
        }
      });
      return;
    }

    const { className, image, _id, price, instructorName } = singleClass;
    const userEmail = user?.email;
    const cartData = {
      className,
      image,
      classId: _id,
      price,
      instructorName,
      userEmail,
    };

    axiosSecure.post("/add-to-cart", cartData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        refetch();
        toast.success(`${className} has been added to the cart`, {
          position: "top-center",
        });
      }
    });
  };
  return (
    <button
      onClick={handleSelectClass}
      className="btn bg-green-800 hover:bg-green-900 text-white"
      disabled={isDisable}
    >
      Select Class
    </button>
  );
};

export default AddToCartBtn;
