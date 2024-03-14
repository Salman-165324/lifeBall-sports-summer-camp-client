import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { toast } from "react-hot-toast";
import useFindUserRole from "../../../hooks/useFindUserRole";
import { useState } from "react";
import { useEffect } from "react";
import AddToCartBtn from "../../utils/AddToCartBtn";

const ClassCard = ({ singleClass }) => {
  const { user } = useAuth();
  const [userRole] = useFindUserRole();
  const redClass = "bg-red-200 rounded-r-xl"

  const navigate = useNavigate();

  const [axiosSecure] = useAxiosSecure();

  const [isDisable, setIsDisable] = useState(false);
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

    if(singleClass.availableSeats < 1){
      setIsDisable(true)
    }
  }, [userRole, singleClass.availableSeats]);
  const handleSelectClass = () => {
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
          navigate("/login");
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
      if (res.data.insertedId) {
        toast.success(`${className} has been added to the cart`, {
          position: "top-center",
        });
      }
    });
  };

  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={singleClass.image}
            />
            <div className={`lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 ${singleClass.availableSeats < 1 && redClass}`}>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {singleClass.className}
              </h1>

              <div className="flex mb-4">
                <span className="flex items-center">
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="currentColor"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 text-indigo-500"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                  </svg>
                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
              <div className="pb-5 border-b-2 border-gray-100 mb-5">
                <p>
                  <span className="font-semibold">Instructor Name: </span>
                  {singleClass.instructorName}
                </p>

                <p>
                  <span className="font-semibold">Available Seat: </span>
                  {singleClass.availableSeats}
                </p>
              </div>
              <p className="leading-relaxed border-b-2 pb-6 border-gray-100 mb-5">
                {singleClass.description}
              </p>
              {/* <div className="mt-6 pb-5 border-b-2 border-gray-100 mb-5">
                  <p>
                    <span className="font-bold">Instructor Name: </span>
                    {singleClass.instructorName}
                  </p>

                  <p>
                  <span className="font-bold">Available Seat: </span>
                    {singleClass.availableSeats}
                  </p>
              </div> */}
              <div className="flex items-center">
                <span className="title-font font-medium text-2xl text-gray-900">
                  ${singleClass.price}
                </span>
                {/* <button className="flex ml-auto">
                  Select Class
                </button> */}
                <span className="flex ml-auto">
                  {/* <button
                    onClick={handleSelectClass}
                    className="btn bg-green-900 hover:bg-green-950 text-white"
                    disabled={isDisable}
                  >
                    Select Class
                  </button> */}
                  <AddToCartBtn singleClass={singleClass}/>
                </span>

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClassCard;
