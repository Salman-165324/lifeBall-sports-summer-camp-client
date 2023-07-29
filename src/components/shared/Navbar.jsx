import { Link } from "react-router-dom";
import websiteLogo from "../../assets/soccer.png";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-hot-toast";
import NavigationItems from "../utils/NavigationItems";
import { FaBars } from "react-icons/fa";
import CartNav from "../utils/CartNav";

const Navbar = () => {
  // const navItems = (
  //   <>
  //     <li className="group">
  //       <div className=" group-hover:text-yellow-100 !important hover:underline">
  //         <Link to={"/"}>Home</Link>
  //       </div>
  //     </li>
  //     <li className="group">
  //       <div className=" group-hover:text-yellow-100 hover:underline">
  //         <Link to={"/instructors"}>Instructors</Link>
  //       </div>
  //     </li>
  //     <li className="group">
  //       <div className=" group-hover:text-yellow-100 hover:underline">
  //         <Link to={"/classes"}>Classes</Link>
  //       </div>
  //     </li>
  //     <li className="group">
  //       <div className="group-hover:text-yellow-100 hover:underline">
  //         <Link to={"/dashboard"}>Dashboard</Link>
  //       </div>
  //     </li>
  //     {user ? (
  //       <>
  //         <li className="grow-0 w-fit pt-4 md:pt-0 ">
  //           <div>
  //             <button
  //               onClick={handleLogout}
  //               className="btn btn-sm btn-outline btn-warning text-white block hover:text-yellow-400  "
  //             >
  //               logout
  //             </button>
  //             {user.photoURL ? (
  //               <>
  //                 <div className="avatar">
  //                   <div className="ml-4 w-10 mask mask-squircle">
  //                     <img src={user?.photoURL} />
  //                   </div>
  //                 </div>
  //               </>
  //             ) : (
  //               <>
  //                 <div>
  //                   <p className="text-white ">{user?.displayName}</p>
  //                 </div>
  //               </>
  //             )}
  //           </div>
  //         </li>
  //       </>
  //     ) : (
  //       <>
  //         <li className="grow-0 w-fit pt-4 md:pt-0  ">
  //           <Link to={"/login"}>
  //             <button className="btn btn-sm">login</button>
  //           </Link>
  //         </li>
  //       </>
  //     )}
  //   </>
  // );
  return (
    <div className="bg-green-950 text-white  lg:opacity-80 w-full fixed z-50">
      <div className="drawer secondary-container ">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              {/* <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label> */}
              <label
                htmlFor="my-drawer-3"
                className="btn bg-green-200 btn-outline mr-6 drawer-button lg:hidden"
              >
                <FaBars size={20} />
              </label>
            </div>
            <div>
              <img className="w-14 h-16" src={websiteLogo} alt="" />
              <div className="ml-2  leading-tight tracking-wider">
                <span className="font-bold text-xl block">LifeBall</span>
              </div>
              <div className="md:hidden">
                <CartNav />
              </div>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold flex items-center justify-center">
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <div className="flex items-center">
                    <NavigationItems></NavigationItems>
                    <CartNav />
                  </div>
                </ul>
              </div>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side ">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full  bg-green-950 text-white font-bold opacity-100">
            {/* Sidebar content here */}
            <NavigationItems></NavigationItems>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
