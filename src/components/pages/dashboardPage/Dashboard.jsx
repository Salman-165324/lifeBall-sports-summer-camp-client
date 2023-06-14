import React from "react";
import useUserData from "../../../hooks/useUserData";
import NavigationItems from "../../utils/NavigationItems";
import AdminNavigation from "./AdminNavigation";
import StudentNavigation from "./StudentNavigation";
import InstructorNavigation from "./InstructorNavigation";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  const [allUsers] = useUserData();
  const userRole = "admin";
  console.log(allUsers);
  return (
    <div className="2xl:bg-rose-200 2xl:py-20">
      <div className=" max-w-screen-2xl mx-auto xl:bg-green-100  2xl:rounded-xl  ">
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content ">
            {/* Page content here */}
            <Outlet></Outlet>

            <label
              htmlFor="my-drawer-2"
              className="btn btn-primary drawer-button lg:hidden"
            >
              Open drawer
            </label>
          </div>
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu p-4 pt-6 w-80 h-full font-bold  bg-green-950 text-white 2xl:rounded-l-xl">
              {/* Sidebar content here */}
              {userRole === "admin" ? (
                <>
                  <AdminNavigation></AdminNavigation>
                </>
              ) : (
                <>
                  {userRole !== "instructor" ? (
                    <StudentNavigation></StudentNavigation>
                  ) : (
                    <InstructorNavigation></InstructorNavigation>
                  )}
                </>
              )}

              <div className="border my-2"></div>
              <NavigationItems></NavigationItems>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
