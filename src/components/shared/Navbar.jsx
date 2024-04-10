import { Link } from "react-router-dom";
import websiteLogo from "../../assets/soccer.png";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import NavigationItems from "../utils/NavigationItems";
import { FaBars } from "react-icons/fa";
import CartNav from "../utils/CartNav";
import useFindUserRole from "../../hooks/useFindUserRole";
import { useState } from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Navbar = () => {
  const { user } = useAuth();
  const [userRole] = useFindUserRole();
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);

  const drawerCloseIconClass = isNavDrawerOpen ? "block" : "hidden";
  const drawerOpenIconClass = isNavDrawerOpen ? "hidden" : "block";
  const menuDrawerStyle = isNavDrawerOpen ? "block" : "hidden";

  return (
    <div className="bg-green-950 text-white  lg:opacity-80 w-full fixed z-50">
      <div className="drawer secondary-container ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className=" px-[10px] py-3 rounded-lg bg-green-800 border-2 border-green-200 mr-6 drawer-button lg:hidden"
              >
                <FaBars size={16} />
              </label>
            </div>
            <div>
              <img className="w-10 h-12" src={websiteLogo} alt="" />
              <div className="leading-tight tracking-wider">
                <Link to={"/home"}>
                  <span className="font-bold text-lg block">LifeBall</span>
                </Link>
              </div>
              <div className="md:hidden">
                {user && userRole !== "admin" && <CartNav />}
              </div>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold flex items-center justify-center">
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <div className="flex items-center">
                    <NavigationItems></NavigationItems>
                    {user && userRole !== "admin" && <CartNav />}
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

          {/* Sidebar content here */}
          <div className="menu p-4 w-72 h-full  bg-green-950 text-white font-bold opacity-100">
            <div className="flex justify-between">
              <NavigationItems></NavigationItems>
              <label htmlFor="my-drawer-3">
                <IoMdCloseCircleOutline size={28} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
