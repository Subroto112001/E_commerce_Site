import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { signUpSchema } from "../../Validation/ValidationSchema/SignUpSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [signUpSuccess, setSignUpSuccess] = useState(false);

  const formik = useFormik({
    initialValues: { name: "", email: "", password: "", confirmPassword: "" },
    validationSchema: signUpSchema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setTimeout(() => {
        setSignUpSuccess(true);
        localStorage.setItem(
          "user",
          JSON.stringify({ ...values, isLoggedIn: true }),
        );
        setTimeout(() => navigate("/"), 2000);
      }, 1500);
    },
  });

  // Password Strength Logic
  const getStrength = (pass) => {
    if (!pass) return 0;
    let s = 0;
    if (pass.length >= 8) s++;
    if (/[A-Z]/.test(pass)) s++;
    if (/[0-9]/.test(pass)) s++;
    if (/[!@#$%]/.test(pass)) s++;
    return s;
  };

  const strength = getStrength(formik.values.password);

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-noto-serif p-6">
      <div className="w-full max-w-sm">
        {/* Success Message - Minimalist */}
        {signUpSuccess && (
          <div className="mb-6 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100 text-center animate-pulse">
            Account created! Redirecting...
          </div>
        )}

        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 text-sm mt-1">
            Join us by filling the details below.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            className="w-full px-4 py-2.5 rounded-md border border-gray-200 outline-none focus:border-black transition-all"
            {...formik.getFieldProps("name")}
          />

          <input
            name="email"
            type="email"
            placeholder="Email"
            className="w-full px-4 py-2.5 rounded-md border border-gray-200 outline-none focus:border-black transition-all"
            {...formik.getFieldProps("email")}
          />

          {/* Password with Strength Indicator */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-2.5 rounded-md border border-gray-200 outline-none focus:border-black transition-all"
              {...formik.getFieldProps("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3 text-gray-400"
            >
              {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
            </button>

            {/* Strength Bar */}
            {formik.values.password && (
              <div className="flex gap-1 mt-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded-full ${i <= strength ? "bg-black" : "bg-gray-100"}`}
                  />
                ))}
              </div>
            )}
          </div>

          <input
            name="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            className="w-full px-4 py-2.5 rounded-md border border-gray-200 outline-none focus:border-black transition-all"
            {...formik.getFieldProps("confirmPassword")}
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-all disabled:bg-gray-300"
          >
            {isLoading ? "Please wait..." : "Sign Up"}
          </button>

          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-400">Or</span>
            </div>
          </div>

          <button
            type="button"
            className="w-full py-2.5 border border-gray-200 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-sm"
          >
            <FcGoogle size={18} /> Google
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-500">
          Already a member?{" "}
          <NavLink
            to="/login"
            className="text-black font-semibold underline underline-offset-4"
          >
            Log in
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
