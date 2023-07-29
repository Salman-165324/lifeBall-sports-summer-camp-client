import { toast } from "react-hot-toast";
import useAxiosSecure from "./useAxiosSecure";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "./useAuth";
import { useState } from "react";
import { useEffect } from "react";
import useFindUserRole from "./useFindUserRole";



const useAddToCart = (singleClass) => {
    const {user} = useAuth(); 
    console.log("Clicked Class Btn");
    const [isDisable, setIsDisable] = useState(false);
    useEffect(() => {
      switch (useFindUserRole) {
        case "admin":
          setIsDisable(true);
          break;
        case "instructor":
          setIsDisable(true);
          break;
        default:
          setIsDisable(false);
      }
  
      if(singleClass.availableSeats < 1){
        setIsDisable(true)
      }
    }, [userRole, singleClass.availableSeats]);

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

    useAxiosSecure.post("/add-to-cart", cartData).then((res) => {
      console.log(res.data);
      if (res.data.insertedId) {
        toast.success(`${className} has been added to the cart`, {
          position: "top-center",
        });
      }
    });
  };

  export default useAddToCart; 