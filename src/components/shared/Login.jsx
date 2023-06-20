import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import PrimaryBtn from "../utils/PrimaryBtn";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import { AiOutlineEye } from "react-icons/ai";
import useAxiosInstance from "../../hooks/useAxiosInstance";

const Login = () => {
  const [axiosInstance] = useAxiosInstance();
  const { googleSignIn, logInWithPassword } = useAuth();
  const [hidePassword, setHidePassword] = useState(true);
  const location = useLocation();

  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const handleHidePassword = () => {
    setHidePassword(!hidePassword);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    logInWithPassword(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You have been successfully Logged in", {
          position: "top-center",
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message, {
          position: "top-center",
        });
      });
  };
  console.log(errors);
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("You have been successfully signed in", {
          position: "top-center", // Set the position to top-center
        });
        const newUser = { name: user.displayName, email: user.email, role: 'student' };
        axiosInstance
          .post("/add-user", { newUser })
          .then((res) => {
            console.log("Response after adding the user to db", res.data);
          })
          .catch((error) => {
            console.log("Error after trying to add user to db", error);
          });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error(
          { errorMessage },
          {
            position: "top-center", // Set the position to top-center
          }
        );
      });
  };
  return (
    <div>
      <div className="primary-container ">
        <div className="hero bg-green-200 rounded-xl py-10">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login Please!</h1>
              <p className="py-6"></p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
              <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email*</span>
                    </label>
                    <input
                      className="input input-bordered"
                      type="email"
                      placeholder="email"
                      {...register("email", { required: true })}
                    />
                    {errors.email?.type === "required" && (
                      <span className="text-red-500 pl-1 pt-0.5">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password*</span>
                    </label>
                    <div className="relative">
                      <input
                        className="input input-bordered w-full"
                        type={hidePassword ? "password" : "text"}
                        placeholder="password"
                        {...register("password", {
                          required: true,
                        })}
                      />
                      <AiOutlineEye
                        onClick={handleHidePassword}
                        size={24}
                        className="absolute right-2 bottom-3 cursor-pointer hover:text-blue-500"
                      />
                    </div>
                    {errors.password?.type === "required" && (
                      <span className="text-red-500 pl-1 pt-0.5">
                        This field is required
                      </span>
                    )}
                  </div>
                  <div className="form-control mt-6">
                    <PrimaryBtn text={"Login"}></PrimaryBtn>
                  </div>
                </form>
                <div className="mt-8">
                  <button onClick={handleGoogleSignIn} className="btn w-full">
                    <AiFillGoogleCircle size={30} />
                    Continue with Google
                  </button>
                  <Link to={"/signup"}>
                    <p className="mt-6 pl-1 underline text-blue-900">
                      New to our site? Please signup
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
