import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  removeFromCart,
  updateQuantity,
  incrementQuantity,
  decrementQuantity,
} from "../Features/AllSlice/cartSlice";
import { calculateDiscountPrice } from "../Utils/Calculation";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const cartHeaders = [
    { id: 1, name: "Product" },
    { id: 2, name: "Price" },
    { id: 3, name: "Quantity" },
    { id: 4, name: "Subtotal" },
  ];

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity > 0) {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const calculateItemSubtotal = (item) => {
    const discountedPrice = calculateDiscountPrice(
      item.price,
      item.discountPercentage || 0,
      2,
    );
    return (discountedPrice * item.quantity).toFixed(2);
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4">
        <div className="my-[40px]">
          <div className="my-10">
            <BreadCrumb />
          </div>
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-2xl font-semibold font-poppins mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Looks like you haven't added anything to your cart yet.
            </p>
            <NavLink to="/product">
              <button className="px-8 py-3 bg-Secondary2_color text-white font-poppins font-medium rounded hover:bg-opacity-90 transition-colors">
                Continue Shopping
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      <div className="my-[40px]">
        <div className="my-10">
          <BreadCrumb />
        </div>

        {/* Cart Header - Desktop */}
        <div className="hidden md:grid grid-cols-4 gap-4 shadow-lg rounded-lg p-4 mb-4 bg-white">
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
            className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center shadow-lg rounded-lg p-4 mb-4 bg-white"
          >
            {/* Product Column */}
            <div className="flex items-center gap-4">
              <button
                onClick={() => handleRemoveItem(item.id)}
                className="text-red-500 hover:text-red-700 text-sm font-bold"
              >
                ✕
              </button>
              <div className="w-[50px] h-[50px] flex-shrink-0 bg-gray-100 rounded">
                <img
                  src={item.thumbnail || item.images?.[0]}
                  alt={item.title}
                  className="w-full h-full object-contain rounded"
                />
              </div>
              <h3 className="font-poppins font-normal text-[14px] md:text-[16px] text-black truncate max-w-[150px]">
                {item.title}
              </h3>
            </div>

            {/* Price Column */}
            <div className="flex justify-between md:justify-start">
              <span className="md:hidden text-gray-500 text-sm">Price:</span>
              <h3 className="font-poppins font-normal text-[16px] text-black">
                $
                {calculateDiscountPrice(
                  item.price,
                  item.discountPercentage || 0,
                  2,
                )}
              </h3>
            </div>

            {/* Quantity Column */}
            <div className="flex justify-between md:justify-start items-center">
              <span className="md:hidden text-gray-500 text-sm">Quantity:</span>
              <div className="flex items-center border rounded w-[90px]">
                <button
                  onClick={() => dispatch(decrementQuantity(item.id))}
                  className="px-2 py-1 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) =>
                    handleUpdateQuantity(item.id, parseInt(e.target.value) || 1)
                  }
                  className="w-[40px] text-center border-0 outline-none"
                  min="1"
                />
                <button
                  onClick={() => dispatch(incrementQuantity(item.id))}
                  className="px-2 py-1 hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>

            {/* Subtotal Column */}
            <div className="flex justify-between md:justify-end">
              <span className="md:hidden text-gray-500 text-sm">Subtotal:</span>
              <h3 className="font-poppins font-normal text-[16px] text-black">
                ${calculateItemSubtotal(item)}
              </h3>
            </div>
          </div>
        ))}

        {/* Action Buttons */}
        <div className="mt-[48px] flex flex-col sm:flex-row justify-between items-center gap-4">
          <NavLink to="/product">
            <button className="px-[48px] py-[16px] rounded border bg-white font-poppins font-medium text-[16px] cursor-pointer hover:bg-gray-50">
              Return To Shop
            </button>
          </NavLink>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row justify-between mt-[80px] gap-8">
          {/* Coupon Section */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Coupon Code"
              className="w-full sm:w-[300px] py-[16px] pl-[24px] h-[56px] border rounded focus:outline-none focus:border-Secondary2_color"
            />
            <button className="px-[48px] h-[56px] rounded bg-Secondary2_color text-white hover:bg-opacity-90 transition-colors">
              Apply Coupon
            </button>
          </div>

          {/* Cart Total Section */}
          <div className="border rounded px-[24px] py-[32px] w-full lg:w-[470px] bg-white">
            <h3 className="font-poppins font-medium text-[20px] text-black mb-6">
              Cart Total
            </h3>

            {/* Subtotal */}
            <div className="flex flex-row justify-between pb-[16px] border-b">
              <h3 className="font-normal text-[16px] font-poppins text-black">
                Subtotal:
              </h3>
              <h3 className="font-normal text-[16px] font-poppins text-black">
                ${cartTotal.toFixed(2)}
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
                ${cartTotal.toFixed(2)}
              </h3>
            </div>

            <div className="flex justify-center">
              <button
                onClick={() =>
                  navigate("/account/profile/product/viewcart/checkout")
                }
                className="px-[48px] py-[16px] rounded bg-Secondary2_color text-white text-[16px] font-poppins font-medium hover:bg-opacity-90 transition-colors"
              >
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
