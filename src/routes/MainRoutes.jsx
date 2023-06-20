import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/homePage/Home";
import SignUp from "../components/shared/SignUp";
import Login from "../components/shared/Login";
import Error from "../components/pages/errorPage/Error";
import Classes from "../components/pages/classesPage/Classes";
import Instructors from "../components/pages/instructorsPage/Instructors";
import Dashboard from "../components/pages/dashboardPage/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../components/pages/ManageUserPage/ManageUser";
import MySelectedClass from "../components/pages/mySelectedClassPage/MySelectedClass";

import PaymentPage from "../components/pages/paymentPage/PaymentPage";
import PaymentHistory from "../components/pages/paymentHistoryPage/PaymentHistory";
import EnrolledClassesPage from "../components/pages/enrolledClassesPage/EnrolledClassesPage";
import RoleRoutes from "./RoleRoutes";
import MyClasses from "../components/pages/myClassesPage/MyClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Navigate to={"/home"}></Navigate>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/classes",
        element: <Classes></Classes>,
      },
      {
        path: "/instructors",
        element: <Instructors></Instructors>,
      },
    ],
  },
  {
    path: "/home",
    element: <Home></Home>,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <RoleRoutes></RoleRoutes>,
      },
      {
        path: "/dashboard/manage-user",
        element: (
          <AdminRoute>
            <ManageUser></ManageUser>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/my-selected-classes",
        element: <MySelectedClass></MySelectedClass>,
      },

      {
        path: "/dashboard/payment",
        element: <PaymentPage></PaymentPage>,
      },
      {
        path: "/dashboard/payment-history",
        element: <PaymentHistory></PaymentHistory>,
      },
      {
        path: "/dashboard/enrolled-classes",
        element: <EnrolledClassesPage></EnrolledClassesPage>,
      },
      {
        path: "/dashboard/my-classes",
        element: (
          <InstructorRoute>
            <MyClasses></MyClasses>
          </InstructorRoute>
        ),
      },
    ],
  },
]);

export default router;
