import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

const useCartData = () => {
  const [axiosInstance] = useAxiosSecure();
  const {loading} = useAuth(); 
  const {data:cartData =[], refetch} = useQuery({
    queryKey: ["cartData", loading],
    enabled: !loading, 
    queryFn: async () => {
      const res = await axiosInstance("/cart-data");
      return res.data; 
    },
  });

  return [cartData ,refetch];
};

export default useCartData;
