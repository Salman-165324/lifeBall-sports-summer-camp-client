import { useEffect } from "react";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const axiosSecure = axios.create({
  // baseURL: 'http://localhost:5000', 
  baseURL:"https://server-summer-camp-one.vercel.app"


});

const useAxiosSecure = () => {

  const {logout, loading, } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (token) {
      axiosSecure.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
    }

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log(error);
        if (
          error.response &&
          (error.response.status === 401 || error.response.status === 403)
        ) {
          await logout();
          navigate("/login");
          
        }
        return Promise.reject(error);
      }
    );
  // }, [logout, navigate, loading, axiosInstance]);
}, [logout, navigate, loading]); // removed axiosInstance for stopping continuously  refetching of payment Form component. Also moved axiosInstance from the useEffect hook. Also created a new AxiosInstance.


  return [axiosSecure];
};

export default useAxiosSecure;
