import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

// Get's currently signed in user's cartData not all the carts.
const useCartData = () => {
  const [axiosSecure] = useAxiosSecure();
  const {stopFetchingCartData} = useAuth(); 
  
  const {data:cartData =[], refetch, isLoading} = useQuery({
    queryKey: ["cartData", stopFetchingCartData],
    enabled: !stopFetchingCartData, 
      queryFn: async () => {
      const res = await axiosSecure("/cart-data");
      return res.data; 
    },
    retry: 12, 
  });

  return [isLoading? null :cartData ,refetch];
};

export default useCartData;
