import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";
import { CiSearch } from "react-icons/ci";

import Search from "./Search";

const Dashboard = () => {
  // const contacts = [
  //   { id: 1, name: "Ali Raza", number: "03001234567" },
  //   { id: 2, name: "Sara Khan", number: "03119876543" },
  //   { id: 3, name: "Ahmed Malik", number: "03225558888" },
  //   { id: 4, name: "Fatima Noor", number: "03339994444" },
  //   { id: 5, name: "Noor", number: "03339994494" },
  //   { id: 6, name: "Noob", number: "033399987667" },
  // ];

  const [active, setActive] = useState("chat");
  // const [query, setQuery] = useState("");
  // const [filter, setFilter] = useState([]);

  // const handleSearch = (e) => {
  //   let value = e.target.value;
  //   setQuery(value);

  //   if (value.trim() === "") {
  //     setFilter([]);
  //   } else {
  //     const result = contacts.filter((contact) =>
  //       contact.number.includes(value),
  //     );

  //     setFilter(result);
  //   }
  // };
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

        <div className="bg-[#0C0C0E] overflow-x-hidden min-w-0 ">
          <p className="tracking-[3.6px] text-[18px] text-white p-7">
            Whats'Up
          </p>

          {/* <p className="pl-7">
            <input
              value={query}
              onChange={handleSearch}
              type="text"
              className="focus:outline-none text-[#818181] custom-dashIn focus:ring-2 focus:ring-[#8B5CF6] "
              placeholder="Find Contact's"
            />
          </p> */}

          {active === "search" && <Search />}

          {/* {filter.length > 0 && (
            <div className="p-5">
              <p className="cust-sp uppercase pb-4 text-xs">Search Result</p>
              <div className="max-h-96 overflow-y-auto  pr-4">
                {filter.map((contact) => {
                  return (
                    <div className="py-2">
                      <div className="grid grid-cols-5 py-3 px-4 gap-2 border border-[#06B6D4]/20 bg-[#06B6D4]/5 ">
                        <div className="col-span-1 border-2 border-[#27272A] bg-[#1A1A1E] w-full"></div>

                        <div className="col-span-4  min-w-0">
                          <p className="text-white  flex justify-between items-center">
                            <span className="font-bold text-[12px] tracking-[1.2px]">
                              {contact.name}
                            </span>
                            <span className="items-end text-[#A1A1AA] text-[10px]">
                              {contact.number}
                            </span>
                          </p>
                          <p className="">
                            <span className="pr-2">
                              <button className="search-btn ">Message</button>
                            </span>
                            <span>
                              <button className="add-btn ">ADD</button>
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
          {query.trim() !== "" && filter.length === 0 && (
            <div className="text-white  p-5">
              <p>No Result Found......</p>
            </div>
          )} */}
        </div>

        <div className="bg-black"></div>
      </div>
    </>
  );
};

export default Dashboard;
