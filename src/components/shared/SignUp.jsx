import React from "react";
import PrimaryBtn from "../utils/PrimaryBtn";
import { Link } from "react-router-dom";
import {AiFillGoogleCircle} from 'react-icons/ai'

const SignUp = () => {
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
              <form >
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="password"
                    className="input input-bordered"
                  />
                  {/* <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label> */}
                </div>
                <div className="form-control mt-6">
                  <PrimaryBtn text={"Signup"}></PrimaryBtn>
                </div>
              </form>
              <div className="mt-8">
                <button className="btn w-full">
                <AiFillGoogleCircle size={30} />
                Continue with Google</button>
                <Link to={"/login"}>
                  <p className="mt-6 pl-1 underline text-blue-900">Already a member? Please Login</p>
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
