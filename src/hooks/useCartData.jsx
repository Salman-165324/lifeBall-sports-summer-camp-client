import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import useAuth from "./useAuth";

// Get's currently signed in user's cartData not all the carts.
const useCartData = () => {
  const [axiosSecure] = useAxiosSecure();
  const { stopFetchingCartData } = useAuth();

  const {
    data: cartData = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["cartData", stopFetchingCartData],
    enabled: !stopFetchingCartData,
    queryFn: async () => {
      const res = await axiosSecure("/cart-data");
      // Defensive: some backends return `null` instead of `[]` for "no items".
      // Callers expect an array (they use `.map()`/`.reduce()`), so normalize here.
      return Array.isArray(res.data) ? res.data : [];
    },
    retry: 12,
  });

  // IMPORTANT:
  // - Always return an array for `cartData` so callers can safely use `.map()`/`.reduce()`
  // - Expose loading state as the 3rd tuple item for UIs that need a spinner/disable logic
  return [cartData, refetch, isLoading];
};

export default useCartData;
