import { React, useState } from "react";
import { NavLink } from "react-router";
const Nav = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav className="bg-black text-white px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="text-xl font-bold">Chat APP</div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6">
            <li className=" cursor-pointer">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </li>

            <li className=" cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sign Up
              </NavLink>
            </li>
          </ul>

          {/* Hamburger Button */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8"
            onClick={() => setOpen(!open)}
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "rotate-45 translate-y-1.5" : ""
              }`}
            ></span>

            {/* Middle Line */}
            <span
              className={`block w-6 h-0.5 bg-white my-1 transition-all duration-300 ${
                open ? "opacity-0" : ""
              }`}
            ></span>

            {/* Bottom Line */}
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                open ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <ul className="md:hidden mt-4 space-y-3">
            <li className="">
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Login
              </NavLink>
            </li>
            <li className="">
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "active" : "")}
              >
                Sign up
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </>
  );
};

export default Nav;
