import { Navigate } from "react-router-dom";
import Spinner from "../components/utils/Spinner";
import useAuth from "../hooks/useAuth";
import useFindUserRole from "../hooks/useFindUserRole";

const RoleRoutes = () => {
  const [userRole, roleDataLoading] = useFindUserRole();

  console.log(userRole);

  if (roleDataLoading) {
    console.log(roleDataLoading);
    return <Spinner></Spinner>;
  }

  switch (userRole) {
    case "admin":
      console.log("Inside Admin Case");
      return <Navigate to={"/dashboard/manage-user"}></Navigate>;
    case "instructor":
      return <Navigate to={"/dashboard/my-classes"}></Navigate>;
    // case "not found":
    //   return <Spinner></Spinner>
    default:
      return <Navigate to={"/dashboard/my-selected-classes"} />;
  }
};

export default RoleRoutes;
