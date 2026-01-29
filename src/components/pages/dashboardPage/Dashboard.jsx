import NavigationItems from "../../utils/NavigationItems";
import AdminNavigation from "./AdminNavigation";
import StudentNavigation from "./StudentNavigation";
import InstructorNavigation from "./InstructorNavigation";
import { Outlet } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import useFindUserRole from "../../../hooks/useFindUserRole";

const Dashboard = () => {
  // const userRole = "admin";
  const [userRole] = useFindUserRole();

  // Dashboard layout notes:
  // - This page is the "shell" for all dashboard routes (it renders <Outlet />).
  // - Keep it full-width and provide consistent spacing/background so child pages
  //   look modern without needing to restyle every individual route component.
  const dashboardTitle =
    userRole === "admin"
      ? "Admin Dashboard"
      : userRole === "instructor"
      ? "Instructor Dashboard"
      : "Student Dashboard";
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />

        {/* Main content */}
        <div className="drawer-content flex min-h-screen flex-col">
          {/* Mobile top bar */}
          <div className="sticky top-0 z-20 border-b border-slate-200 bg-white/80 p-3 backdrop-blur lg:hidden">
            <div className="flex items-center justify-between">
              <label
                htmlFor="my-drawer-2"
                className="btn btn-sm drawer-button border-slate-200 bg-white text-slate-800 shadow-sm hover:bg-slate-50"
              >
                <FaBars size={18} />
              </label>
              <div className="text-right leading-tight">
                <p className="text-sm font-semibold text-slate-900">
                  {dashboardTitle}
                </p>
                <p className="text-xs text-slate-500">
                  Manage your account and activities
                </p>
              </div>
            </div>
          </div>

          {/* Route content */}
          <main className="w-full flex-1 px-4 py-6 sm:px-6 lg:px-8">
            {/* Child dashboard pages render here */}
            <Outlet />
          </main>
        </div>

        {/* Sidebar */}
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>

          <aside className="h-full w-72 bg-gradient-to-b from-emerald-950 to-emerald-900 text-emerald-50 shadow-xl">
            {/* Sidebar header */}
            <div className="border-b border-white/10 px-5 py-5">
              <p className="text-sm font-semibold tracking-wide text-emerald-100">
                {dashboardTitle}
              </p>
             
            </div>

            {/* Sidebar links */}
            <ul className="menu menu-md gap-1 px-4 py-4 font-semibold">
              {userRole === "admin" ? (
                <AdminNavigation />
              ) : userRole === "instructor" ? (
                <InstructorNavigation />
              ) : (
                <StudentNavigation />
              )}

              <div className="my-3 border-t border-white/10" />
              <NavigationItems />
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
