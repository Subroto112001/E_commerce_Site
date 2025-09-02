import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

const NotFound =()=> {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-6">
      <h1 className="text-9xl font-bold text-gray-800">404</h1>
      <h2 className="mt-4 text-2xl font-semibold text-gray-700">
        Page Not Found
      </h2>
      <p className="mt-2 text-gray-500 max-w-md">
        Sorry, the page you are looking for doesn’t exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 inline-flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-2xl shadow-md hover:bg-blue-700 transition-all"
      >
        <FaHome className="text-lg" />
        Back to Home
      </Link>
    </div>
  );
}
export default NotFound