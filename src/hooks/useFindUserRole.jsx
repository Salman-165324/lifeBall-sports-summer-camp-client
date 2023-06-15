import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useFindUserRole = () => {
    const [axiosInstance] = useAxiosSecure(); 
    const {user, loading} = useAuth();
    const {data:userRole=""} = useQuery({
        queryKey: ['findUserRole', user, loading],
        enabled:!loading, 
        queryFn: async () => {
            const res = await axiosInstance(`/find-role/${user?.email}`)
            return res.data; 
        }
        
    })

    return [userRole];

}

export default useFindUserRole; 