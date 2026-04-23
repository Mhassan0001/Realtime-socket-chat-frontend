import React from "react";
import { FaMessage } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-[4rem_23.75rem_52.25rem] min-h-screen ">
        <div className=" bg-black flex  flex-col items-center gap-10 h-full py-7 ">
          <div className="x">
            <FaMessage size={25} className="text-[#8B5CF6]" />
          </div>
          <div>
            <IoIosContacts size={30} className="text-white" />
          </div>
          <div className="">
            <IoMdCall size={30} className="text-white " />
          </div>

          <div className="mt-auto">
            <MdOutlineLogout size={30} className="text-white " />
          </div>
        </div>

        <div className="bg-[#0C0C0E]">
          <p className="tracking-[3.6px] text-[18px] text-white p-7">
            Whats'Up
          </p>

          <p className="pl-7">
            <input
              type=""
              className="focus:outline-none text-[#A9ABB3] custom-dashIn focus:ring-2 focus:ring-purple-400 "
              placeholder="Find Contact's"
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
