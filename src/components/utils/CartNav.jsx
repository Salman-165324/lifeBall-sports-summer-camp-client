import { BsFillCartCheckFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useCartData from "../../hooks/useCartData";
import DataSpinner from "./DataSpinner";

const CartNav = () => {
  const [cartData] = useCartData();
  const cartLength = cartData?.length || 0;
  const isLoading = cartData === null;

  return isLoading ? (
    <DataSpinner />
  ) : (
    <div>
      <Link className="flex items-center" to={"/dashboard/my-selected-classes"}>
        <BsFillCartCheckFill size={38} className="ml-8 mr-1 " />
        <div className="badge h-7 w-12 mt-1 text-lg">+{cartLength}</div>
      </Link>
    </div>
  );
};

export default CartNav;
