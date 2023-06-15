
import useUserData from "../../../hooks/useUserData";
import UserTableRow from "./UserTableRow";

const ManageUser = () => {
  const [allUsers] = useUserData();

  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold mt-16 ml-3 lg:text-center lg:ml-0">Manage All the Users</h2>
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
