import React from "react";
import { Link } from "react-router-dom";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import PrimaryBtn from "../utils/PrimaryBtn";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);
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
                <form>
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
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      className="input input-bordered"
                      type="email"
                      placeholder="email"
                      {...register("email", { required: true })}
                    />
                  </div>

                  <div className="form-control mt-6">
                    <PrimaryBtn text={"Login"}></PrimaryBtn>
                  </div>
                </form>
                <div className="mt-8">
                  <button className="btn w-full">
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
