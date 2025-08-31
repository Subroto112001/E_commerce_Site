import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import monitor from "../assets/Flash/Monitorr.png";

import BreadCrumb from "../Component/CommonComponent/BreadCrumb";

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "LCD Monitor",
      price: 650,
      quantity: 1,
      image: monitor,
    },
    {
      id: 2,
      name: "H1 Gamepad",
      price: 550,
      quantity: 2,
      image: monitor, 
    },
  ]);

  const cartHeaders = [
    { id: 1, name: "Product" },
    { id: 2, name: "Price" },
    { id: 3, name: "Quantity" },
    { id: 4, name: "Subtotal" },
  ];

  const updateQuantity = (id, newQuantity) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, newQuantity) } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const calculateSubtotal = (price, quantity) => price * quantity;

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + calculateSubtotal(item.price, item.quantity),
      0
    );
  };

  return (
    <div className="container mx-auto px-4">
      <div className="my-[40px]">
        <div className="my-10">
          <BreadCrumb />
        </div>

        {/* Cart Header */}
        <div className="grid grid-cols-4 gap-4 shadow-lg rounded-lg p-4 mb-4 bg-white">
          {cartHeaders.map((header) => (
            <div
              key={header.id}
              className={`text-[16px] font-poppins font-medium text-gray-700 ${
                header.name === "Subtotal" ? "text-right" : ""
              }`}
            >
              {header.name}
            </div>
          ))}
        </div>

        {/* Cart Items */}
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-4 gap-4 items-center shadow-lg rounded-lg p-4 mb-4 bg-white"
          >
            {/* Product Column */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                ✕
              </button>
              <div className="w-[50px] h-[39px] flex-shrink-0">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <h3 className="font-poppins font-normal text-[16px] text-black">
                {item.name}
              </h3>
            </div>

            {/* Price Column */}
            <div>
              <h3 className="font-poppins font-normal text-[16px] text-black">
                ${item.price}
              </h3>
            </div>

            {/* Quantity Column */}
            <div>
              <div className="flex items-center border rounded w-[90px]">
                <button
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="px-2 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    updateQuantity(item.id, parseInt(e.target.value) || 1)
                  }
                  className="w-[40px] text-center border-0 outline-none"
                  min="1"
                />
                <button
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="px-2 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Subtotal Column */}
            <div className="text-right">
              <h3 className="font-poppins font-normal text-[16px] text-black">
                ${calculateSubtotal(item.price, item.quantity)}
              </h3>
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="mt-[48px] flex flex-row justify-between items-center">
          <NavLink to="/product">
            <button className="px-[48px] py-[16px] rounded border bg-white font-poppins font-medium text-[16px] cursor-pointer hover:bg-gray-50">
              Return To Shop
            </button>
          </NavLink>
          <button className="px-[48px] py-[16px] rounded border bg-white font-poppins font-medium text-[16px] hover:bg-gray-50">
            Update Cart
          </button>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row justify-between mt-[80px] gap-8">
          {/* Coupon Section */}
          <div className="flex flex-row gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-[300px] py-[16px] pl-[24px] h-[56px] border rounded focus:outline-none focus:border-Secondary2_color"
            />
            <button className="px-[48px] h-[56px] rounded bg-Secondary2_color text-white hover:bg-opacity-90 transition-colors">
              Apply Coupon
            </button>
          </div>

          {/* Cart Total Section */}
          <div className="border rounded px-[24px] py-[32px] w-[470px] bg-white">
            <h3 className="font-poppins font-medium text-[20px] text-black mb-6">
              Cart Total
            </h3>

            {/* Subtotal */}
            <div className="flex flex-row justify-between pb-[16px] border-b">
              <h3 className="font-normal text-[16px] font-poppins text-black">
                Subtotal:
              </h3>
              <h3 className="font-normal text-[16px] font-poppins text-black">
                ${calculateTotal()}
              </h3>
            </div>

            {/* Shipping */}
            <div className="flex flex-row justify-between py-[16px] border-b">
              <h3 className="font-normal text-[16px] font-poppins text-black">
                Shipping:
              </h3>
              <h3 className="font-normal text-[16px] font-poppins text-black">
                Free
              </h3>
            </div>

            {/* Total */}
            <div className="flex flex-row justify-between pt-[16px] mb-[24px]">
              <h3 className="font-medium text-[16px] font-poppins text-black">
                Total:
              </h3>
              <h3 className="font-medium text-[16px] font-poppins text-black">
                ${calculateTotal()}
              </h3>
            </div>

            <div className="flex justify-center">
              <button className="px-[48px] py-[16px] rounded bg-Secondary2_color text-white text-[16px] font-poppins font-medium hover:bg-opacity-90 transition-colors">
                Proceed to checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
