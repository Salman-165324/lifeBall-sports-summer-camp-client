import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure"

const useUserData = () =>{

    const [axiosSecure] = useAxiosSecure(); 

    const {data: allUsers = [], refetch} = useQuery({

        queryKey: ['userData'], 
        queryFn: async () => {

            const res = await axiosSecure('/users')
            return res.data; 

        }
    })

    return [allUsers, refetch];
}

export default useUserData;