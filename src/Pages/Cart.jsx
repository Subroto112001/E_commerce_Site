import React from 'react'
import { NavLink } from 'react-router-dom'
import monitor from '../assets/Flash/Monitorr.png'
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

        <div className="flex flex-row justify-between items-center">
          {/* colum 1 */}
          <div className="flex flex-col justify-center gap-[96px]  ">
            <h1 className="font-poppins font-normal text-[16px]">Product</h1>
            {/* product image is here  */}
            <div className=" flex flex-row gap-[20px] items-center">
              <div className="w-[50px] h-[39px]">
                <picture>
                  <img
                    src={monitor}
                    alt={monitor}
                    className="w-full h-full object-cover"
                  />
                </picture>
              </div>
              <h3 className="font-poppins font-normal text-[16px] text-black">
                LCD Monitor
              </h3>
            </div>
            {/* product image is here  */}
          </div>
          {/* colum 1 */}
          {/* colum 2  */}
          <div className="flex flex-col justify-center gap-[103px] ">
            <h1 className="font-poppins font-normal text-[16px]">Price</h1>
            <h3 className="font-poppins font-normal text-[16px] text-black">
              $ 100.00
            </h3>
          </div>
          {/* colum 2  */}
          {/* colum 3 */}
          <div className="flex flex-col justify-center gap-[103px] ">
            <h1 className="font-poppins font-normal text-[16px]">Quantity</h1>
            <h3 className="font-poppins font-normal text-[16px] text-black">
            01
            </h3>
          </div>
          {/* colum 3  */}
          {/* colum 4 */}
          <div className="flex flex-col justify-center gap-[103px] ">
            <h1 className="font-poppins font-normal text-[16px]">Subtotal</h1>
            <h3 className="font-poppins font-normal text-[16px] text-black">
            605
            </h3>
          </div>
          {/* colum 4  */}
        </div>
      </div>
    </div>
  );
}

export default Cart