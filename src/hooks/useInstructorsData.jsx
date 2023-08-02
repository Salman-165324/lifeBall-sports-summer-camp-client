import { useQuery } from "@tanstack/react-query";
import useAxiosInstance from "./useAxiosInstance";

const useInstructorsData = () => {

    const [axiosInstance] = useAxiosInstance(); 
    const {data:instructors=[], refetch} = useQuery({
        queryKey: ['instructorsData'], 
        queryFn: async () => {
            const res = await axiosInstance.get("/instructors")
            return res.data; 
        }, 
        retry: 6, 
    })
    return [instructors, refetch]; 
}

export default useInstructorsData; 