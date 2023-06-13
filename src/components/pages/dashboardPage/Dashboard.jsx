import React from "react";
import useUserData from "../../../hooks/useUserData";
import NavigationItems from "../../utils/NavigationItems";
import AdminNavigation from "./AdminNavigation";
import StudentNavigation from "./StudentNavigation";
import InstructorNavigation from "./InstructorNavigation";

const Dashboard = () => {
  const [allUsers] = useUserData();
  const userRole = "instructor";
  console.log(allUsers);
  return (
    <div className="container max-w-[2100px] mx-auto">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          {/* Page content here */}
          <h1>This is a Dashboard</h1>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 pt-6 w-80 h-full font-bold  bg-green-950 text-white">
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
  );
};

export default Dashboard;
