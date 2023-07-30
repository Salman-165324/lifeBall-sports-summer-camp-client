import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosInstance from "./useAxiosInstance";

const useFindUserRole = () => {
    const [axiosInstance] = useAxiosInstance() 
    const {user, loading} = useAuth();
    const {data:userRole="not found", isLoading:roleDataLoading} = useQuery({
        queryKey: ['findUserRole', user, loading],
        enabled:!loading, 
        queryFn: async () => {
            const res = await axiosInstance(`/find-role/${user?.email}`)
            return res.data; 
        }
        
    })

    return [userRole, roleDataLoading];

}

export default useFindUserRole; 