import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"

const useUserData = () =>{

    const [axiosInstance] = useAxiosSecure(); 

    const {data: allUsers = [], refetch} = useQuery({

        queryKey: ['userData'], 
        queryFn: async () => {

            const res = await axiosInstance('/users')
            return res.data; 

        }
    })

    return [allUsers, refetch];
}

export default useUserData;