import { Link } from "react-router-dom";
import websiteLogo from "../../assets/soccer.png";

const Navbar = () => {
  const navItems = (
    <>
      <li >
        <Link className=" hover:text-yellow-100 !important hover:underline" to={"/"}>Home</Link>
      </li>
      <li>
        <Link className=" hover:text-yellow-100 hover:underline" to={"/"}>Instructors</Link>
      </li>
      <li>
        <Link className=" hover:text-yellow-100 hover:underline" to={"/"}>Classes</Link>
      </li>
      <li>
        <Link className=" hover:text-yellow-100 hover:underline" to={"/"}>Dashboard</Link>
      </li>
      <li className="grow-0 w-fit pt-4 md:pt-0 ">
        <Link>
          <button className="btn btn-sm ">login</button>
        </Link>
      </li>
    </>
  );
  return (
    <div className="bg-green-950 text-white  opacity-80 w-full">
      <div className="drawer secondary-container">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
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
              </label>
            </div>
            <div>
              <img className="w-14 h-16" src={websiteLogo} alt="" />
              <div className="ml-2  leading-tight tracking-wider">
                <span className="font-bold text-xl block">LifeBall</span>
              </div>
            </div>
            <div className="flex-1 px-2 mx-2 font-bold flex items-center justify-center">
              <div className="flex-none hidden lg:block">
                <ul className="menu menu-horizontal">
                  {/* Navbar menu content here */}
                  <div className="flex items-center">
                  {navItems}
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
            {navItems}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
