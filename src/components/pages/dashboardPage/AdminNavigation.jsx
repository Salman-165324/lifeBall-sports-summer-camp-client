import { Link } from "react-router-dom";
import {AiFillHome} from 'react-icons/ai'
import {BsFillPeopleFill} from 'react-icons/bs'
import { GiScrollQuill } from "react-icons/gi";

const AdminNavigation = () => {
  return (
    <div>
      {/* <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline ">
          <Link className="flex items-center" to={"/dashboard"}>
          <AiFillHome size={20} className="mr-2 mb-1" />Admin Home
          </Link>
        </div>
      </li> */}
      <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline ">
          <Link className="flex items-center" to={"/dashboard"}>
          <GiScrollQuill size={21} className="mr-2 mb-1" />Manage Classes
          </Link>
        </div>
      </li>
      <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline ">
          <Link className="flex items-center" to={"/dashboard/manage-user"}>
          <BsFillPeopleFill size={20} className="mr-2 mb-1" />Manage Users
          </Link>
        </div>
      </li>

    </div>
  );
};

export default AdminNavigation;
