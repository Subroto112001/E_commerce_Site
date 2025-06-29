import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'

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
          
          <BrowserRouter>
          
          
          </BrowserRouter>


    </div>
  );
}

export default Account