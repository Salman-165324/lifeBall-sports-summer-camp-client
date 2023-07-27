import { GiScrollQuill } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiFillFileAdd } from "react-icons/ai";
const InstructorNavigation = () => {
  return (
    <>
      <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline ">
          <Link className="flex items-center" to={"/dashboard/my-classes"}>
            <GiScrollQuill size={22} className="mr-2 mb-1" />
            My Classes
          </Link>
        </div>
      </li>
      <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline ">
          <Link className="flex items-center" to={"/dashboard"}>
            <AiFillFileAdd size={20} className="mr-2 mb-1" />
            Add Classes
          </Link>
        </div>
      </li>
    </>
  );
};

export default InstructorNavigation;
