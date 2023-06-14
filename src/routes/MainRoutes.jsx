import { Navigate, createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/Home";
import SignUp from "../components/shared/SignUp";
import Login from "../components/shared/Login";
import Error from "../components/pages/errorPage/Error";
import Classes from "../components/pages/classesPage/Classes";
import Instructors from "../components/pages/instructorsPage/Instructors";
import Dashboard from "../components/pages/dashboardPage/Dashboard";
import PrivateRoute from "./PrivateRoute";
import ManageUser from "../components/pages/ManageUserPage/ManageUser";

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
        path: "/dashboard/manage-user",
        element: <ManageUser></ManageUser>,
      },
    ],
  },
]);

export default router;
