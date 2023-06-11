import React from "react";
import PrimaryBtn from "../utils/PrimaryBtn";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);
  return (
    <div className="primary-container ">
      <div className="hero bg-green-200 rounded-xl py-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6"></p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-1">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    placeholder="name"
                    {...register("name", {})}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="email"
                    placeholder="email"
                    {...register("email", { required: true })}
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">PhotoURL</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="text"
                    placeholder="photoURL"
                    {...register("photoURL", {})}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="password"
                    placeholder="password"
                    {...register("password", {
                      required: true,
                      min: 6,
                      pattern: /^(?=.*[A-Z])(?=.*[\W_]).*$/,
                    })}
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Confirm Password</span>
                  </label>
                  <input
                    className="input input-bordered"
                    type="password"
                    placeholder="confirm password"
                    {...register("confirmPassword", { required: true })}
                  />
                </div>

                <div className="form-control mt-6">
                  <input
                    type="submit"
                    value="Signup"
                    className="mt-5 btn bg-green-900 hover:bg-green-950 text-white"
                  />
                </div>
              </form>
              <div className="mt-8">
                <button className="btn w-full">
                  <AiFillGoogleCircle size={30} />
                  Continue with Google
                </button>
                <Link to={"/login"}>
                  <p className="mt-6 pl-1 underline text-blue-900">
                    Already a member? Please Login
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
