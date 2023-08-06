import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  // baseURL: 'http://localhost:5000',
  baseURL: "https://server-summer-camp-one.vercel.app",
});

const useAxiosSecure = () => {
  const { logout, loading } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem("access-token");
      // console.log(token)
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      // console.log(config);
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
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
  }, [logout, navigate, loading]);

  return [axiosSecure];
};

export default useAxiosSecure;
