import React from "react";

const Nav = () => {
  return (
    <>
      <div className=" nav grid grid-cols-10 uppercase text-xs  place-items-center px-8 ">
        <div className="col-span-6 text-white justify-self-start ">chat APP</div>
        <div className="col-span-3 text-white justify-self-end">
          Security
        </div>
        <div className="col-span-1 text-white g justify-self-end">
          Sign Up
        </div>
      </div>
    </>
  );
};

export default Nav;
