import React from 'react'
import { NavLink } from 'react-router-dom'

const Cart = () => {
  return (
    <div className="container">
      <div>
        <div className="mt-[80px] mb-[104px]">
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
            to="/cart"
            className={({ isActive, isPending }) =>
              isPending
                ? "text-black font-poppins font-normal text-[14px]"
                : isActive
                ? "text-black"
                : "text-text1_color font-poppins font-normal text-[14px]"
            }
          >
            Cart
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Cart