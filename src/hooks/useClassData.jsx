import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAxiosInstance from "./useAxiosInstance";

const useClassData = () => {
  const [axiosInstance] = useAxiosInstance(); 
  const { data : classes = [], refetch} = useQuery({
    queryKey: ['classData'],
    queryFn: async () => {
      const res = await axiosInstance.get("/classes")
      console.log(res.data);
      return res?.data
    },
  });

  return [classes, refetch]
};

export default useClassData;
