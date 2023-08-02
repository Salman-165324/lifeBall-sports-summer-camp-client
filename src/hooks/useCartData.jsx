import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

// Get's currently signed in user's cartData not all the carts.
const useCartData = () => {
  const [axiosSecure] = useAxiosSecure();
  const {loading:userLoading, user} = useAuth(); 
  console.log("Loading data from the useCartData", userLoading);
  console.log("user data from the useCartData", user);
  const {data:cartData =[], refetch} = useQuery({
    queryKey: ["cartData", userLoading],
    enabled: !userLoading, 
    queryFn: async () => {
      const res = await axiosSecure("/cart-data");
      return res.data; 
    },
  });

  return [cartData ,refetch];
};

export default useCartData;
