import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Chat from "./Chat";
import Search from "./Search";

const Dashboard = () => {
  const [active, setActive] = useState("chat");
  return (
    <>
      <div className="grid grid-cols-[4rem_23.75rem_52.25rem] min-h-screen overflow-x-auto">
        <div className=" bg-black flex  flex-col items-center gap-10 h-full py-7 ">
          <div className="cursor-pointer" onClick={() => setActive("chat")}>
            <FaMessage
              size={25}
              className={active === "chat" ? "text-[#8B5CF6]" : "text-white"}
            />
          </div>
          <div className="cursor-pointer" onClick={() => setActive("contact")}>
            <IoIosContacts
              size={30}
              className={active === "contact" ? "text-[#8B5CF6]" : "text-white"}
            />
          </div>
          <div className="cursor-pointer" onClick={() => setActive("search")}>
            <CiSearch
              size={30}
              className={active === "search" ? "text-[#8B5CF6]" : "text-white "}
            />
          </div>

          <div className="mt-auto">
            <MdOutlineLogout size={30} className="text-white " />
          </div>
        </div>

        <div className="bg-[#0C0C0E] border-[#27272A] border-r border-l overflow-x-hidden min-w-0 ">
          <p className="tracking-[3.6px] text-[18px] text-white p-7">
            Whats'Up
          </p>
          {active === "search" && <Search />}
        </div>

        <div className="bg-black">{active === "chat" && <Chat />}</div>
      </div>
    </>
  );
};

export default Dashboard;
