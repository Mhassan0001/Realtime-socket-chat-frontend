import React from "react";
import { Link } from "react-router";
import round4 from "../assets/images/round4.png";
import round5 from "../assets/images/round5.png";
import round6 from "../assets/images/round6.png";
const Login = () => {
  return (
    <>
      <div className="bg-login">
        <div className="grid grid-cols-10 pt-5 ">
          <div className="col-span-5 ">
            <div className="px-15">
              <div className="grid place-items-start ">
                <p className="text-heading-l2 h-custom-login1 text-white">
                  Stay
                </p>

                <p className="text-heading-l2 h-custom-login1 text-[#00e3fd] ">
                  Connected.
                </p>

                <p className="text-heading-l2  text-white">Evolve.</p>

                <p className="h6-custom text-start pe-10 ">
                  Step into the Digital Aurora. High-fidelity communication for
                  the modern conversation.
                </p>
              </div>

              <div className="grid grid-cols-4 gap-1 pt-8">
                <div className="col-span-1">
                  <div className="flex justify-start">
                    <div className="flex -space-x-3 img-l ">
                      <img src={round4} className="w-12 h-12" alt="" />
                      <img src={round5} className="w-12 h-12" alt="" />
                      <img src={round6} className="w-12 h-12" alt="" />
                    </div>
                  </div>
                </div>

                <div className="col-span-3">
                  <p className="roundimg flex justify-start">
                    Joined by 
                    <span className="color-Login font-bold px-1"> 12k+ </span> 
                    in the conversation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-5">
            <div className="formLogin px-5 text-white">
              <p className="login-text  pt-9 text-center ">Welcome Back !</p>

              <p className="sign-text-1 text-[#A9ABB3] text-center py-3 text-xs">
                Stay Connected with Your Near One's
              </p>

              <div className="grid grid-cols-1">
                <div className="col-1 pt-2">
                  <p className="text-xs text-[#A9ABB3] pb-1">Email</p>
                  <input
                    name="email"
                    placeholder="voyager@pulse.eth"
                    type="email"
                    required
                    className="w-full  rounded-lg h-form-custom focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div className="col-1 pt-2">
                  <p className="text-xs text-[#A9ABB3] pb-1">Password</p>
                  <input
                    name="password"
                    placeholder="••••••••••••"
                    type="text"
                    className="w-full  rounded-lg h-form-custom focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center pt-7">
                <button className="bg-purple-400 text-purple-950 uppercase  w-full h-10 rounded-3xl font-bold cursor-pointer">
                  Login To Chat
                </button>
              </div>
              <p className="text-center text-sm py-6 cursor-pointer sp text-[#00e3fd]  ">
                Forgot Password?
              </p>
              <div className="flex justify-center items-center h-custom-login ">
                <p className="text-sm">
                  Don't Have an Account?
                  <span className="color-Login">
                    <Link to="/"> Join Now</Link>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
