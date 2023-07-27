import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

// Get's currently signed in user's cartData not all the carts.
const useCartData = () => {
  const [axiosSecure] = useAxiosSecure();
  const {loading} = useAuth(); 
  const {data:cartData =[], refetch} = useQuery({
    queryKey: ["cartData", loading],
    enabled: !loading, 
    queryFn: async () => {
      const res = await axiosSecure("/cart-data");
      return res.data; 
    },
  });

  return [cartData ,refetch];
};

export default useCartData;
