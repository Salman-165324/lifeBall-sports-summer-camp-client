import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";
import { useState } from "react";

const useClassData = () => {
  const [axiosInstance] = useAxiosInstance(); 
  const [axiosError, setAxiosError] = useState(false); 
  const [errorMessage, setErrorMessage] = useState(""); 
  const { data : classes = [], refetch} = useQuery({
    queryKey: ['classData'],
    queryFn: async () => {
      try {
        const res = await axiosInstance.get("/classes");
        return res?.data;
      } catch (error) {
      
        console.error("An error occurred:", error);
        setAxiosError(true); 
        setErrorMessage(error.message)
        throw new Error("Failed to fetch data from the server");
      
      }
    },
    retry: 12, 
  });

  return [classes, refetch, axiosError, errorMessage]
};

export default useClassData;
