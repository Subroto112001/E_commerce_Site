import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { loginschema } from "../../Validation/ValidationSchema/LoginSchema";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);

  const formik = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: loginschema,
    onSubmit: async (values) => {
      setIsLoading(true);
      setTimeout(() => {
        setLoginSuccess(true);
        localStorage.setItem(
          "user",
          JSON.stringify({ email: values.email, isLoggedIn: true }),
        );
        setTimeout(() => navigate("/"), 1500);
      }, 1500);
    },
  });

  return (
    <div className="min-h-screen flex items-center justify-center bg-white font-noto-serif p-6">
      <div className="w-full max-w-sm">
        {/* Success Message */}
        {loginSuccess && (
          <div className="mb-6 p-3 bg-green-50 text-green-700 text-sm rounded-lg border border-green-100 text-center animate-pulse">
            Login successful! Redirecting...
          </div>
        )}

        {/* Header */}
        <div className="mb-8 text-center sm:text-left">
          <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
            Welcome Back
          </h1>
          <p className="text-gray-500 text-sm mt-1">
            Please enter your details to sign in.
          </p>
        </div>

        <form onSubmit={formik.handleSubmit} className="space-y-4">
          {/* Email Field */}
          <div>
            <input
              name="email"
              type="email"
              placeholder="Email address"
              className={`w-full px-4 py-3 rounded-md border ${
                formik.touched.email && formik.errors.email
                  ? "border-red-400"
                  : "border-gray-200"
              } outline-none focus:border-black transition-all`}
              {...formik.getFieldProps("email")}
            />
            {formik.touched.email && formik.errors.email && (
              <p className="mt-1.5 text-xs text-red-500">
                {formik.errors.email}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-md border ${
                formik.touched.password && formik.errors.password
                  ? "border-red-400"
                  : "border-gray-200"
              } outline-none focus:border-black transition-all`}
              {...formik.getFieldProps("password")}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3.5 text-gray-400 hover:text-black"
            >
              {showPassword ? <FaEye size={16} /> : <FaEyeSlash size={16} />}
            </button>
            {formik.touched.password && formik.errors.password && (
              <p className="mt-1.5 text-xs text-red-500">
                {formik.errors.password}
              </p>
            )}
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end">
            <button
              type="button"
              className="text-xs text-gray-400 hover:text-black transition-colors"
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 bg-black text-white rounded-md font-medium hover:bg-gray-800 transition-all disabled:bg-gray-200 flex items-center justify-center"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

          {/* Divider */}
          <div className="relative py-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-100"></div>
            </div>
            <div className="relative flex justify-center text-[10px] uppercase tracking-widest">
              <span className="bg-white px-4 text-gray-400">
                Or continue with
              </span>
            </div>
          </div>

          {/* Google Button */}
          <button
            type="button"
            className="w-full py-2.5 border border-gray-200 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-sm font-medium"
          >
            <FcGoogle size={18} /> Google
          </button>
        </form>

        {/* Footer Link */}
        <p className="mt-8 text-center text-sm text-gray-500">
          New here?{" "}
          <NavLink
            to="/signUp"
            className="text-black font-semibold underline underline-offset-4 decoration-gray-300 hover:decoration-black transition-all"
          >
            Create an account
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default React.memo(Login);
