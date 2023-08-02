import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";

const useClassData = () => {
  const [axiosInstance] = useAxiosInstance(); 
  const { data : classes = [], refetch} = useQuery({
    queryKey: ['classData'],
    queryFn: async () => {
      const res = await axiosInstance.get("/classes")

      return res?.data
    },
    retry: 6, 
  });

  return [classes, refetch]
};

export default useClassData;
