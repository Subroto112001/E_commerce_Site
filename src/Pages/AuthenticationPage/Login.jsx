import React from 'react'
import SignUpImage from "../../assets/SignUp//SignUp.png"
import { FcGoogle } from 'react-icons/fc';
import { NavLink } from 'react-router-dom';
const Login = () => {
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
              Log in to Exclusive
            </h2>
            <h2 className="font-normal font-poppins text-[16px] text-text2-color mt-6">
              Enter your details below
            </h2>
            {/* Header Title will be here */}

            {/* input box is here */}
            <div className="Inputbox mt-12 flex flex-col gap-10">
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

            <div className="flex justify-between items-center mt-10 gap-4">
              <button className="cursor-pointer bg-Secondary2_color py-4 px-[48px] font-poppins text-[16px] font-medium text-white rounded">
                Log In
              </button>
              <h3 className='cursor-pointer font-poppins font-normal text-[16px] text-Secondary2_color'> Forget Password</h3>
            </div>
            {/* Button is here */}
            {/* Down Note is here */}
            <div className=" mt-[34px] flex justify-center items-center">
              <h3 className="text-[16px] font-normal font-poppins text-black">
              haven't account?{" "}
                <NavLink
                  to={"/signUp"}
                  className="font-medium border-b pb-1 cursor-pointer"
                >
                  Sign Up
                </NavLink>
              </h3>
            </div>
            {/* Down Note is here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login