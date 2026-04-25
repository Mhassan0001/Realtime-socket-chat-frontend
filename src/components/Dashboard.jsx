import React, { useState } from "react";
import { FaMessage } from "react-icons/fa6";
import { IoIosContacts } from "react-icons/io";
import { IoMdCall } from "react-icons/io";
import { MdOutlineLogout } from "react-icons/md";

const Dashboard = () => {
  const contacts = [
    { id: 1, name: "Ali Raza", number: "03001234567" },
    { id: 2, name: "Sara Khan", number: "03119876543" },
    { id: 3, name: "Ahmed Malik", number: "03225558888" },
    { id: 4, name: "Fatima Noor", number: "03339994444" },
  ];

  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState([]);

  const handleSearch = (e) => {
    let value = e.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setFilter([]);
    } else {
      const result = contacts.filter((contact) =>
        contact.number.includes(value),
      );

      setFilter(result);
    }
  };
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
              value={query}
              onChange={handleSearch}
              type="text"
              className="focus:outline-none text-[#818181] custom-dashIn focus:ring-2 focus:ring-purple-400 "
              placeholder="Find Contact's"
            />
          </p>

          {filter.length > 0 && (
            <div className="ps-5">
              {filter.map((contact) => {
                return (
                  <li className="text-white">
                    <h1>{contact.name}</h1>
                    <h1>{contact.number}</h1>
                  </li>
                );
              })}
            </div>
          )}


          

        </div>
      </div>
    </>
  );
};

export default Dashboard;
