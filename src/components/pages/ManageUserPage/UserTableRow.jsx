import { toast } from "react-hot-toast";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useUserData from "../../../hooks/useUserData";
import { useState } from "react";
import { useEffect } from "react";

const UserTableRow = ({ user, index }) => {
  const [axiosInstance] = useAxiosSecure();
  const [, refetch] = useUserData();
  const { _id, name, email, role } = user;
  const [isInstructorBtnDisable, setInstructorBtnDisable] = useState(false);
  const [isStudentBtnDisable, setStudentBtnDisable] = useState(false);
  const [isAdminBtnDisable, setAdminBtnDisable] = useState(false);

  // Disable and Enable btn

  useEffect(() => {
    switch (role) {
      case "admin":
        setAdminBtnDisable(true);
        setInstructorBtnDisable(false);
        setStudentBtnDisable(false);
        break;
      case "student":
        setAdminBtnDisable(false);
        setInstructorBtnDisable(false);
        setStudentBtnDisable(true);
        break;
      case "instructor":
        setAdminBtnDisable(false);
        setInstructorBtnDisable(true);
        setStudentBtnDisable(false);
        break;

      default:
        setAdminBtnDisable(false);
        setInstructorBtnDisable(false);
        setStudentBtnDisable(true);
        break;
    }
  }, [role]);

  const handleRoleChange = (e) => {
    const btnText = e.target.innerText.toLowerCase();
    const role = btnText.split(" ")[1];
    console.log(role);
    const reqData = { role, _id };
    axiosInstance.patch("/update-role", { reqData }).then((req) => {
      console.log(req.data);
      if (req.data.modifiedCount) {
        refetch();
        toast.success(`${name} is now ${role}`, {
          position: "top-center",
        });

        // disable and enable btn based on role change
        switch (role) {
          case "admin":
            setAdminBtnDisable(true);
            setInstructorBtnDisable(false);
            setStudentBtnDisable(false);
            break;
          case "student":
            setAdminBtnDisable(false);
            setInstructorBtnDisable(false);
            setStudentBtnDisable(true);
            break;
          case "instructor":
            setAdminBtnDisable(false);
            setInstructorBtnDisable(true);
            setStudentBtnDisable(false);
            break;

          default:
            break;
        }
      }
    });
  };
  return (
    <tr className="">
      <th>{index}</th>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role ? role.toUpperCase() : "STUDENT"}</td>
      <td>
        <button
          onClick={handleRoleChange}
          disabled={isInstructorBtnDisable}
          className="btn btn-outline text-slate-600 font-semibold text-sm btn-md lg:btn-sm"
        >
          Make Instructor
        </button>
      </td>
      <td>
        <button
          onClick={handleRoleChange}
          disabled={isAdminBtnDisable}
          className="btn btn-outline btn-md lg:btn-sm text-slate-600 font-semibold text-sm "
        >
          Make Admin
        </button>
      </td>
      <td>
        <button
          onClick={handleRoleChange}
          disabled={isStudentBtnDisable}
          className="btn btn-outline btn-md lg:btn-sm text-slate-600 font-semibold text-sm "
        >
          Make Student
        </button>
      </td>
    </tr>
  );
};

export default UserTableRow;
