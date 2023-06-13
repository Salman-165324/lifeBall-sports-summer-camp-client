import { Link, useRouteError } from "react-router-dom";
import errorPic from "../../../assets/error.jpg";
import PrimaryBtn from "../../utils/PrimaryBtn";
const Error = () => {
  const error = useRouteError();
  console.error(error);
  return (
    <div className="hero min-h-screen bg-green-100">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={errorPic}
          className=" max-w-xs md:max-w-sm object-cover rounded-lg shadow-2xl"
        />
        <div className="ml-3 md:ml-0">
          <h1 className=" text-3xl lg:text-5xl font-bold">
            Sorry Something Went Wrong!
          </h1>
          <p className="py-2">
            <span className="font-semibold text-red-500">Error: </span>
            <i className="text-red-500">
              {error?.statusText || error?.message}
            </i>
          </p>
          <Link to={"/home"}>
            <PrimaryBtn text={"Back to Home Page"}></PrimaryBtn>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
