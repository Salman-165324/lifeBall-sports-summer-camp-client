import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import {MdPayments} from 'react-icons/md'
import { IoFootballOutline } from "react-icons/io5";
import {BsFillCartCheckFill} from 'react-icons/bs'
import {GiScrollQuill} from 'react-icons/gi'
const StudentNavigation = () => {
  return (
    <div>
      <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline ">
          <Link className="flex items-center" to={"/dashboard/my-selected-classes"}>
            <BsFillCartCheckFill size={20} className="mr-2 mb-1" />
            My Selected Classes
          </Link>
        </div>
      </li>
      <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline ">
          <Link className="flex items-center" to={"/dashboard"}>
            <GiScrollQuill size={22} className="mr-2 mb-1" />
            Enrolled Classes
          </Link>
        </div>
      </li>
      <li className="group">
        <div className=" group-hover:text-yellow-100 hover:underline ">
          <Link className="flex items-center" to={"/dashboard/payment-history"}>
            <MdPayments size={20} className="mr-2 mb-1" />
            Payment History
          </Link>
        </div>
      </li>
    </div>
  );
};

export default StudentNavigation;
