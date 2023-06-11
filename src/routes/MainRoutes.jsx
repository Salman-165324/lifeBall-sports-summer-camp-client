import {
  Navigate,
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../components/pages/Home";
import SignUp from "../components/shared/SignUp";
import Login from "../components/shared/Login";
import Error from "../components/pages/errorPage/Error";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <Error></Error>, 
      children: [
        {
          path: "/", 
          element: <Navigate to={'/home'}></Navigate>
        }, 
        {
          path: "/signup", 
          element: <SignUp></SignUp>
        }, 
        {
          path: "/login", 
          element: <Login></Login>
        }
      ]
    },
    {
      path: '/home', 
      element: <Home></Home>
    }
  ]);


  export default router