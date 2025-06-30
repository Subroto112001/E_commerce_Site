import React from "react";
import { BrowserRouter, NavLink, Outlet } from "react-router-dom";

const Account = () => {
  return (
    <div className="container">
      {/* header area */}

      <div className="flex flex-row items-center justify-between mt-[80px] mb-[104px]">
        <div>
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black"
                : isActive
                ? " text-red-600"
                : "text-text1_color font-poppins font-normal text-[14px]"
            }
          >
            Home
          </NavLink>
          &nbsp; / &nbsp;
          <NavLink
            to="/account"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black font-poppins font-normal text-[14px]"
                : isActive
                ? "text-black"
                : "text-text1_color font-poppins font-normal text-[14px]"
            }
          >
            Account
          </NavLink>
        </div>

        <div>
          <h3>
            Welcome!{" "}
            <span className="text-Secondary2_color font-poppins font-normal text-[14px]">
              Subroto
            </span>
          </h3>
        </div>
      </div>

      {/* header area */}

      <div className="flex flex-row justify-between items-start">
        <div>
          <h1 className="text-[16px] font-poppins font-medium text-text2-color ">
            Manage Account
          </h1>
          <div className="mt-4 pl-[35px] flex flex-col gap-2">
            <NavLink
              to={"/account/profile"}
              className={({ isActive, isPending }) =>
                isPending
                  ? "text-black "
                  : isActive
                  ? " text-red-600 text-[16px] font-poppins font-normal"
                  : "text-black text-[16px] font-poppins font-normal"
              }
            >
              My Profile
            </NavLink>
            <h1 className="text-[16px] font-poppins font-normal">
              Address Book
            </h1>
            <h1 className="text-[16px] font-poppins font-normal">
              My Payment Options
            </h1>
          </div>
        </div>
        {/* right side component */}
        <div className="w-[70%]">
          <Outlet />
        </div>
        {/* right side component */}
      </div>
    </div>
  );
};

export default Account;
