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
            <input type="number" className="border p-1 rounded w-[72px]" />
          </div>
          {/* colum 3  */}
          {/* colum 4 */}
          <div className="flex flex-col justify-center gap-[103px] ">
            <h1 className="font-poppins font-normal text-[16px]">Subtotal</h1>
            <h3 className="font-poppins font-normal text-[16px] text-black">
              $605
            </h3>
          </div>
          {/* colum 4  */}
        </div>
        <div className="mt-[48px] flex flex-row justify-between items-center">
          <button className="px-[48px] py-[16px] rounded border bg-white font-poppins font-medium text-[16px]">
            Return To Shop
          </button>
          <button className="px-[48px] py-[16px] rounded border bg-white font-poppins font-medium text-[16px]">
            Update Cart
          </button>
        </div>
        <div className="flex flex-row justify-between mt-[80px]">
          {/* button box is here */}
          <div className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-[300px] py-[16px] pl-[24px] h-[56px] border rounded"
            />
            <button className="px-[48px]  h-[56px] rounded bg-Secondary2_color text-white">
              Apply Coupon
            </button>
          </div>
          {/* button box is here */}
          {/* card total box is here */}
          <div className="border rounded px-[24px] py-[32px] w-[470px] ">
            <h3 className="font-poppins font-medium text-[20px] text-black">
              Cart Total
            </h3>
            {/* Subtotal box is here */}
            <div className="flex flex-row justify-between pb-[16px] mt-[24px] border-b">
              <h3 className="font-normal text-[16px font-poppins text-black">
                Subtotal
              </h3>
              <h3 className="font-normal text-[16px font-poppins text-black">
                $1750
              </h3>
            </div>
            {/* Subtotal box is here */}
            {/* Shipping box is here */}
            <div className="flex flex-row justify-between pb-[16px] mt-[24px] border-b">
              <h3 className="font-normal text-[16px font-poppins text-black">
                Shipping
              </h3>
              <h3 className="font-normal text-[16px font-poppins text-black">
                Free
              </h3>
            </div>
            {/* Shipping box is here */}

            {/* Total box is here */}
            <div className="flex flex-row justify-between pb-[16px] mt-[24px] ">
              <h3 className="font-normal text-[16px font-poppins text-black">
                Total
              </h3>
              <h3 className="font-normal text-[16px font-poppins text-black">
                $1800
              </h3>
            </div>
            {/* Total box is here */}

            <div className='flex flex-row justify-center mt-[16px]'>
              
              <button className="px-[48px] py-[16px] rounded bg-Secondary2_color text-white text-[16px] font-poppins font-medium">
                Process to checkout
              </button>
            </div>
          </div>
          {/* card total box is here */}
        </div>
      </div>
    </div>
  );
}

export default Cart