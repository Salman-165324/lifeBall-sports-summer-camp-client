import axios from "axios";
import { useEffect } from "react";
import useAuth from "./useAuth";
import useAxiosInstance from "./useAxiosInstance";
import { useNavigate } from "react-router-dom";

const useAxiosSecure = () => {
  const {logout, loading, } = useAuth();
  const navigate = useNavigate();
  const [axiosInstance] = useAxiosInstance();
  useEffect(() => {
    const token = localStorage.getItem("access-token");
    if (token) {
      axiosInstance.interceptors.request.use((config) => {
        config.headers.Authorization = `Bearer ${token}`;
        return config;
      });
    }

    axiosInstance.interceptors.response.use(
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
  }, [logout, navigate, axiosInstance, loading]);

  return [axiosInstance];
};

export default useAxiosSecure;
