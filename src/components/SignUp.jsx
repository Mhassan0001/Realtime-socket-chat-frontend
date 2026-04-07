import React, { useState } from "react";
import round1 from "../assets/images/round1.png";
import round2 from "../assets/images/round2.png";
import round3 from "../assets/images/round3.png";
import axios from "axios";
import { toast } from "react-toastify";

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  //  handleChange: input fields ko state se link karna onchange k through
  const handleChange = (e) => {
    setFormData({
      ...formData, // previous state copy karo
      [e.target.name]: e.target.value, 
    });
  };
  //?==================================================

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, lastName, email, mobile, password } = formData;
    if (!firstName || !lastName || !email || !mobile || !password) {
      toast.error("All fields are required!");
      return; // API call hi mat karo
    }

    setLoading(true);
    try {
      const res = await axios.post(
        "http://localhost:9000/auth/create",
        formData,
      );
      console.log("Sign Up Successfully", res.data);
      toast.success("Sign Up Successfully");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
      });
    } catch (err) {
      console.error(err);
      let errorMsg = "Signup failed!";

      if (err.response && err.response.data) {
        // ✅ 'msg' (success) aur 'message' (error) dono check karo
        errorMsg =
          err.response.data.msg ||
          err.response.data.message ||
          "Signup failed!";
      }

      toast.error(errorMsg);
    }

    setLoading(false);
  };

  //? ==================================================
  return (
    <>
      <div className="bg">
        <div className="grid grid-cols-10 pt-3 px-5">
          <div className="col-span-5">
            <div className="grid place-items-center ">
              <p className="text-heading-1 h-custom">Join The</p>

              <p className="text-heading-2 h-custom">
                <span className="custom-color1">D</span>
                <span className="custom-color2">i</span>gital
              </p>

              <p className="text-heading-2">
                <span className="custom-color1">A</span>
                <span className="custom-color2">u</span>rora.
              </p>

              <p className="h6-custom text-center px-15">
                Be part of a vibrant community where conversations glow with
                creativity. Share messages, media, and moments in real-time –
                securely and seamlessly.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-5 pt-10">
              <div className="col-span-1">
                <div className="flex justify-end">
                  <div className="flex -space-x-4 ">
                    <img src={round1} alt="" />
                    <img src={round2} alt="" />
                    <img src={round3} alt="" />
                  </div>
                </div>
              </div>

              <div className="col-span-1">
                <p className="roundimg flex justify-start">
                  <span className="color-Login font-bold">2.4M+</span> explorers
                  already pulse.
                </p>
              </div>
            </div>
          </div>

          <div className="col-span-5">
            <div className="form px-5 text-white">
              <p className="sign-text  pt-9 ">Start Your Journey</p>
              <p className="sign-text-1 text-[#A9ABB3] text-xs">
                Stay Connected with Your Near One's
              </p>
              <div className="grid grid-cols-10 gap-3.5 pt-7 ">
                <div className="col-span-5">
                  <p className="text-xs pb-1 text-[#A9ABB3] ">First Name</p>
                  <input
                    name="firstName"
                    value={formData.firstName}
                    placeholder="Aura"
                    type="text"
                    className="w-full  rounded-lg h-form-custom"
                    required
                    onChange={handleChange}
                  />
                </div>

                <div className="col-span-5 ">
                  <p className="text-xs text-[#A9ABB3] pb-1">Last Name</p>
                  <input
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Voyager"
                    type="text"
                    required
                    className="w-full  rounded-lg h-form-custom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div className="col-1 pt-2">
                  <p className="text-xs text-[#A9ABB3] pb-1">Email</p>
                  <input
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="voyager@pulse.eth"
                    type="email"
                    required
                    className="w-full  rounded-lg h-form-custom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div className="col-1 pt-2">
                  <p className="text-xs text-[#A9ABB3] pb-1">Mobile Number</p>
                  <input
                    name="mobile"
                    value={formData.mobile}
                    onChange={handleChange}
                    placeholder="+1 (555) 000-0000"
                    type="text"
                    required
                    className="w-full  rounded-lg h-form-custom"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1">
                <div className="col-1 pt-2">
                  <p className="text-xs text-[#A9ABB3] pb-1">Password</p>
                  <input
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••••••"
                    type="text"
                    className="w-full  rounded-lg h-form-custom"
                  />
                </div>
              </div>

              <div className="flex justify-center items-center pt-7">
                <button
                  disabled={loading}
                  onClick={handleSubmit}
                  className="bg-purple-400 text-purple-950 uppercase  w-full h-10 rounded-3xl font-bold cursor-pointer"
                >
                  {loading ? "Loading..." : " Let's Communicate "}
                </button>
              </div>

              <div className="flex justify-center items-center pt-4">
                <p className="text-sm">
                  Already Have an Account?
                  <span className="color-Login">Login </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
