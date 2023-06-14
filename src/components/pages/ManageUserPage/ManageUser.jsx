import React from "react";
import SectionTitle from "../../utils/SectionTitle";
import useUserData from "../../../hooks/useUserData";
import UserTableRow from "./UserTableRow";

const ManageUser = () => {
  const [allUsers] = useUserData();
  return (
    <div>
      <div className="mt-16">
        <SectionTitle title={"Manage All the Users"}></SectionTitle>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th className="font-bold text-base">#</th>
                <th className="font-bold text-base">Name</th>
                <th className="font-bold text-base">Email</th>
                <th className="font-bold text-base">Role</th>
                <th className="font-bold text-base">Make Instructor</th>
                <th className="font-bold text-base">Make Admin</th>
                <th className="font-bold text-base">Make Student</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {allUsers.map((user, index) => (
                <UserTableRow
                  key={user._id}
                  user={user}
                  index={index + 1}
                ></UserTableRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUser;
