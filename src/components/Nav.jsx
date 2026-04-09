import React from "react";
import { NavLink } from "react-router";
const Nav = () => {
  return (
    <>
      <div className=" nav grid grid-cols-10 uppercase text-xs  place-items-center px-8 ">
        <div className="col-span-6 text-white justify-self-start ">
          chat APP
        </div>
        <div className="col-span-3 text-white justify-self-end">Security</div>
        <div className="col-span-1 text-white g justify-self-end">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
          
            Sign Up
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Nav;
