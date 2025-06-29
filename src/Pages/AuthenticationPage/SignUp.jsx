import React from "react";
import SignUpImage from "../../assets/SignUp/SignUp.png";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="container">
      <div className="flex justify-between items-center mt-[60px] mb-[140px]">
        {/* signup Image is here */}
        <div className="left">
          <picture>
            <img src={SignUpImage} alt={SignUpImage} />
          </picture>
        </div>
        {/* signup Image is here */}
        <div className="right">
          <div>
            {/* Header Title will be here */}
            <h2 className="font-medium font-inter text-[36px] text-text2-color ">
              Create an account
            </h2>
            <h2 className="font-normal font-poppins text-[16px] text-text2-color mt-6">
              Enter your details below
            </h2>
            {/* Header Title will be here */}

            {/* input box is here */}
            <div className="Inputbox mt-12 flex flex-col gap-10">
              <input
                type="text"
                placeholder="Name"
                className="border-b w-[350px] pb-2"
              />

              <input
                type="text"
                placeholder="Email or Phone Number"
                className="border-b w-[350px] pb-2"
              />
              <input
                type="text"
                placeholder="Password"
                className="border-b w-[350px] pb-2"
              />
            </div>
            {/* input box is here */}

            {/* Button is here */}

            <div className="flex flex-col justify-center items-center mt-10 gap-4">
              <button className="cursor-pointer bg-Secondary2_color py-4 px-[122px] font-poppins text-[16px] font-medium text-white rounded">
                Create Account
              </button>
              <button className="cursor-pointer bg-white py-4 px-[86px] font-poppins text-[16px] font-medium text-black rounded flex flex-row items-center justify-center gap-4 border">
                <span className="text-[24px]">
                  <FcGoogle />
                </span>
                Sign up with Google
              </button>
            </div>
            {/* Button is here */}
            {/* Down Note is here */}
            <div className=" mt-[34px] flex justify-center items-center">
              <h3 className="text-[16px] font-normal font-poppins text-black">
                Already have account?{" "}
                <NavLink
                  to={"/login"}
                  className="font-medium border-b pb-1 cursor-pointer"
                >
                  Log in
                </NavLink>
              </h3>
            </div>
            {/* Down Note is here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
