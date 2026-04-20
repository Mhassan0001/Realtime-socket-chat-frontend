import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import round4 from "../assets/images/round4.png";
import round5 from "../assets/images/round5.png";
import round6 from "../assets/images/round6.png";
import { toast } from "react-toastify";
const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email, password } = formData;
    if (!email || !password) {
      return toast.error("All Fields Required");
    }
    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:9000/auth/login",
        formData,
      );
      console.log("Login Successfully....", res.data);

      localStorage.setItem("authToken", res.data.token);

      toast.success("Login Successfully....");
      navigate("/dashboard");
    } catch (err) {
      console.error(err);
      let errorMsg = "Login failed!";

      if (err.response && err.response.data) {
        // ✅ 'msg' (success) aur 'message' (error) dono check karo
        errorMsg =
          err.response.data.msg ||
          err.response.data.message ||
          "Signup failed!";
      }

      toast.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

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
                    onChange={handleChange}
                    value={formData.email}
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
                    onChange={handleChange}
                    value={formData.password}
                    name="password"
                    placeholder="••••••••••••"
                    type="password"
                    className="w-full  rounded-lg h-form-custom focus:outline-none focus:ring-2 focus:ring-purple-400"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center pt-7">
                <button
                  disabled={loading}
                  onClick={handleSubmit}
                  className="bg-purple-400 text-purple-950 uppercase  w-full h-10 rounded-3xl font-bold cursor-pointer"
                >
                  {loading ? "Loading..." : "Login To Chat"}
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
