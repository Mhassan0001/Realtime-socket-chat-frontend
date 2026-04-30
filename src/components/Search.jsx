import React, { useState } from "react";

const Search = () => {
  const contacts = [
    { id: 1, name: "Ali Raza", number: "03001234567" },
    { id: 2, name: "Sara Khan", number: "03119876543" },
    { id: 3, name: "Ahmed Malik", number: "03225558888" },
    { id: 4, name: "Fatima Noor", number: "03339994444" },
    { id: 5, name: "Noor", number: "03339994494" },
    { id: 6, name: "Noob", number: "033399987667" },
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
      <p className="pl-7">
        <input
          value={query}
          onChange={handleSearch}
          type="text"
          className="focus:outline-none text-[#818181] custom-dashIn focus:ring-2 focus:ring-[#8B5CF6] "
          placeholder="Find Contact's"
        />
      </p>

      {filter.length > 0 && (
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
      )}
    </>
  );
};

export default Search;
