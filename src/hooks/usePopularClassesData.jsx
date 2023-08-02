import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";

const usePopularClassesData = () =>{
    const [axiosInstance] = useAxiosInstance(); 
    const {data: popularClasses = [], refetch} = useQuery({
        queryKey: ['popularClasses'], 
        queryFn: async () => {
            const res = await axiosInstance.get("/popular-classes")
            return res.data; 
        }, 
        retry: 6, 
    })


    return [popularClasses, refetch]; 

}

export default usePopularClassesData; 