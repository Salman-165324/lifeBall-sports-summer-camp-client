import React from "react";
import Spinner from "../components/utils/Spinner";
import useFindUserRole from "../hooks/useFindUserRole";
import { Navigate } from "react-router-dom";
const StudentRoute = ({children}) => {
  const [userRole, roleDataLoading] = useFindUserRole();

  if (roleDataLoading) {
    return <Spinner />;
  }

  if (userRole === 'student') {
    return children;
  }

  return <Navigate to={"/"} />;
};

export default StudentRoute;
