import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useRoleChange = (command, id) => {
    const [axiosInstance] = useAxiosSecure();
    const reqData = {command, id}; 
    const {data:response ={}} =useQuery({
        queryKey : ['changeUserRole', reqData], 
        queryFn: async () => {
            const res = axiosInstance.patch(`/update-role`, reqData)
            return res.data; 
        }
    })

    return [response];
}

export default useRoleChange; 