import React, { useState } from "react";
import SignUpImage from "../../assets/SignUp/Loginsshopping.png";
import { FcGoogle } from "react-icons/fc";
import { NavLink } from "react-router-dom";
import { useFormik } from "formik";
import { loginschema } from "../../Validation/ValidationSchema/LoginSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";

//--------------------------

const Login = () => {

const [showPassword, setShowPassword] = useState(false);



  const initialValues = {
    email: "",
    password: "",
  };
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: loginschema,
    onSubmit: (value) => {
      console.log(value);
    },
  });

  return (
    <div className="container">
      <div className="flex justify-center h-screen gap-[100px] items-center">
        {/* login Image is here */}
        <div className="w-[500px] h-[500px]  left">
          <picture>
            <img
              src={SignUpImage}
              alt={SignUpImage}
              className="w-full h-full object-cover"
            />
          </picture>
        </div>
        {/* login Image is here */}
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
            <form
              className="Inputbox mt-12 flex flex-col gap-10 relative"
              onSubmit={formik.handleSubmit}
            >
              <input
                type="text"
                onChange={formik.handleChange}
                value={formik.values.email}
                id="email"
                placeholder="Email or Phone Number"
                className="border-b w-[350px] pb-2"
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="block text-red-500 transition-all duration-300">
                  {formik.errors.email}
                </div>
              ) : null}
              <input
                
               type={showPassword ?"text" : "password" }
                
                placeholder="*******"
                onChange={formik.handleChange}
                value={formik.values.password}
                id="password"
                className="border-b w-[350px] pb-2"
              />
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-[40%] translate-y-[-50%] cursor-pointer"
              >
                {showPassword ?  <FaEye /> : <FaEyeSlash /> }
              </div>
              {formik.touched.password && formik.errors.password ? (
                <div className="block text-red-500 transition-all duration-300">
                  {formik.errors.password}
                </div>
              ) : null}
              <div className="flex justify-between items-center mt-5 gap-4">
                <button
                  type="submit"
                  onClick={formik.handleSubmit}
                  className="cursor-pointer bg-Secondary2_color py-4 px-[48px] font-poppins text-[16px] font-medium text-white rounded"
                >
                  Log In
                </button>
                <h3 className="cursor-pointer font-poppins font-normal text-[16px] text-Secondary2_color">
                  {" "}
                  Forget Password
                </h3>
              </div>
            </form>
            {/* input box is here */}

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
};

export default React.memo(Login);
