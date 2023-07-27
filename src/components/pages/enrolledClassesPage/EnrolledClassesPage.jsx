import { useEffect } from "react";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useState } from "react";
import EnrolledClassTableRow from "./EnrolledClassTableRow";

const EnrolledClassesPage = () => {
  const [axiosSecure] = useAxiosSecure();
  const [classes, setClasses] = useState([]);
  useEffect(() => {
    axiosSecure("/enrolled-classes").then((res) => {
      console.log(res.data);
      setClasses(res.data);
    });
  }, [axiosSecure]);
  return (
    <div>
      <div>
        {/* Todo: Make this headlines a separate component */}
        <h2 className="text-4xl font-bold mt-16 ml-3 lg:text-center lg:ml-0">
          Your Enrolled Classes
        </h2>
      </div>
      <div className="overflow-x-auto mt-10 px-6">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>#</label>
              </th>
              <th>Class</th>
              <th>Instructor</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((singleClass, index) => (
              <EnrolledClassTableRow
                key={singleClass._id}
                index = {index +1 }
                singleClass = {singleClass}
              ></EnrolledClassTableRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClassesPage;
