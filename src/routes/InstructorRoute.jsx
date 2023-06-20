import React from "react";
import Spinner from "../components/utils/Spinner";
import useFindUserRole from "../hooks/useFindUserRole";
import { Navigate } from "react-router-dom";

const InstructorRoute = ({children}) => {
  const [userRole, roleDataLoading] = useFindUserRole();

  if (roleDataLoading) {
    return <Spinner />;
  }

  if (userRole === "instructor") {
    return children;
  }

  return <Navigate to={"/"} />;
};

export default InstructorRoute;
