import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="bg">
        <div className="flex items-center justify-center pt-3">
          <div className="form px-5 text-white">
            <p className="sign-text  pt-9 ">Start Your Journey</p>
            <p className="sign-text-1 text-[#A9ABB3] text-xs">
              Stay Connected with Your Near One's
            </p>
            <div className="grid grid-cols-10 gap-3.5 pt-7 ">
              <div className="col-span-5">
                <p className="text-xs pb-1 text-[#A9ABB3] ">First Name</p>
                <input
                placeholder="Aura"
                  type="text"
                  className="w-full  rounded-lg h-form-custom"
                />
              </div>

              <div className="col-span-5 ">
                <p className="text-xs text-[#A9ABB3] pb-1">Last Name</p>
                <input
                placeholder="Voyager"
                  type="text"
                  className="w-full  rounded-lg h-form-custom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="col-1 pt-2">
                <p className="text-xs text-[#A9ABB3] pb-1">Email</p>
                <input
                placeholder="voyager@pulse.eth"
                  type="text"
                  className="w-full  rounded-lg h-form-custom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="col-1 pt-2">
                <p className="text-xs text-[#A9ABB3] pb-1">Mobile Number</p>
                <input
                placeholder="+1 (555) 000-0000"
                  type="text"
                  className="w-full  rounded-lg h-form-custom"
                />
              </div>
            </div>

            <div className="grid grid-cols-1">
              <div className="col-1 pt-2">
                <p className="text-xs text-[#A9ABB3] pb-1">Password</p>
                <input
                placeholder="••••••••••••"
                  type="text"
                  className="w-full  rounded-lg h-form-custom"
                />
              </div>
            </div>

            <div className="flex justify-center items-center pt-7">
              <button className="bg-purple-400 text-purple-950  w-full h-10 rounded-3xl">
                Submit
              </button>
            </div>

            <div className="flex justify-center items-center pt-4">
              <p className="text-sm">
                Already Have an Account? <span>Login </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
