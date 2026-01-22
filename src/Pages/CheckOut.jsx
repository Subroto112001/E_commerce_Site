import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "../Features/AllSlice/cartSlice";
import { calculateDiscountPrice } from "../Utils/Calculation";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";

const CheckOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartItems = useSelector(selectCartItems);
  const cartTotal = useSelector(selectCartTotal);

  const [formData, setFormData] = useState({
    firstName: "",
    companyName: "",
    streetAddress: "",
    apartment: "",
    city: "",
    phone: "",
    email: "",
    saveInfo: false,
  });

  const [paymentMethod, setPaymentMethod] = useState("cash");
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate order placement
    setOrderPlaced(true);
    dispatch(clearCart());

    // Redirect to home after 3 seconds
    setTimeout(() => {
      navigate("/");
    }, 3000);
  };

  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4">
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <div className="text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-10 h-10 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl md:text-3xl font-semibold font-poppins mb-4">
              Order Placed Successfully!
            </h2>
            <p className="text-gray-500 mb-2">Thank you for your purchase.</p>
            <p className="text-gray-400 text-sm">Redirecting to homepage...</p>
          </div>
        </div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4">
        <div className="min-h-[60vh] flex flex-col items-center justify-center">
          <h2 className="text-2xl font-semibold font-poppins mb-4">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mb-8">
            Add items to your cart before checkout.
          </p>
          <button
            onClick={() => navigate("/product")}
            className="px-8 py-3 bg-Secondary2_color text-white font-poppins font-medium rounded hover:bg-opacity-90 transition-colors"
          >
            Continue Shopping
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 font-noto-serif">
      {/* Header */}
      <div className="mt-10 md:mt-[80px]">
        <BreadCrumb />
      </div>

      {/* Main Content */}
      <div className="mt-10 md:mt-[80px] mb-20">
        <h3 className="text-2xl md:text-[36px] font-medium font-inter text-black">
          Billing Details
        </h3>

        <form onSubmit={handlePlaceOrder}>
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 mt-8 md:mt-12">
            {/* Left Side - Billing Form */}
            <div className="flex flex-col w-full lg:w-[470px] gap-6 md:gap-8">
              {/* First Name */}
              <div className="flex flex-col gap-2">
                <label className="font-normal font-poppins text-[14px] md:text-[16px] text-text1_color">
                  First Name <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="rounded bg-secondary_color px-4 py-3 md:py-5 text-[14px] font-poppins outline-none focus:ring-1 focus:ring-Secondary2_color"
                />
              </div>

              {/* Company Name */}
              <div className="flex flex-col gap-2">
                <label className="font-normal font-poppins text-[14px] md:text-[16px] text-text1_color">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleInputChange}
                  className="rounded bg-secondary_color px-4 py-3 md:py-5 text-[14px] font-poppins outline-none focus:ring-1 focus:ring-Secondary2_color"
                />
              </div>

              {/* Street Address */}
              <div className="flex flex-col gap-2">
                <label className="font-normal font-poppins text-[14px] md:text-[16px] text-text1_color">
                  Street Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="streetAddress"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                  required
                  className="rounded bg-secondary_color px-4 py-3 md:py-5 text-[14px] font-poppins outline-none focus:ring-1 focus:ring-Secondary2_color"
                />
              </div>

              {/* Apartment */}
              <div className="flex flex-col gap-2">
                <label className="font-normal font-poppins text-[14px] md:text-[16px] text-text1_color">
                  Apartment, floor, etc.
                </label>
                <input
                  type="text"
                  name="apartment"
                  value={formData.apartment}
                  onChange={handleInputChange}
                  className="rounded bg-secondary_color px-4 py-3 md:py-5 text-[14px] font-poppins outline-none focus:ring-1 focus:ring-Secondary2_color"
                />
              </div>

              {/* Town/City */}
              <div className="flex flex-col gap-2">
                <label className="font-normal font-poppins text-[14px] md:text-[16px] text-text1_color">
                  Town/City <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="rounded bg-secondary_color px-4 py-3 md:py-5 text-[14px] font-poppins outline-none focus:ring-1 focus:ring-Secondary2_color"
                />
              </div>

              {/* Phone Number */}
              <div className="flex flex-col gap-2">
                <label className="font-normal font-poppins text-[14px] md:text-[16px] text-text1_color">
                  Phone Number <span className="text-red-400">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="rounded bg-secondary_color px-4 py-3 md:py-5 text-[14px] font-poppins outline-none focus:ring-1 focus:ring-Secondary2_color"
                />
              </div>

              {/* Email Address */}
              <div className="flex flex-col gap-2">
                <label className="font-normal font-poppins text-[14px] md:text-[16px] text-text1_color">
                  Email Address <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="rounded bg-secondary_color px-4 py-3 md:py-5 text-[14px] font-poppins outline-none focus:ring-1 focus:ring-Secondary2_color"
                />
              </div>

              <div className="flex flex-row items-center gap-4">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  className="w-5 h-5 md:w-[24px] md:h-[24px] accent-Secondary2_color"
                />
                <h3 className="font-poppins font-normal text-[14px] md:text-[16px] text-black">
                  Save this information for faster check-out next time
                </h3>
              </div>
            </div>

            {/* Right Side - Order Summary */}
            <div className="w-full lg:w-[500px] lg:mt-0">
              <div className="bg-white p-6 rounded-lg">
                <h4 className="font-medium text-lg md:text-xl font-poppins mb-6">
                  Order Summary
                </h4>

                {/* Cart Items */}
                <div className="space-y-4 max-h-[300px] overflow-y-auto mb-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-4">
                      <img
                        src={item.thumbnail || item.images?.[0]}
                        alt={item.title}
                        className="w-12 h-12 object-contain bg-gray-100 rounded"
                      />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium truncate">
                          {item.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          Qty: {item.quantity}
                        </p>
                      </div>
                      <p className="text-sm font-medium">
                        $
                        {(
                          calculateDiscountPrice(
                            item.price,
                            item.discountPercentage || 0,
                            2,
                          ) * item.quantity
                        ).toFixed(2)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Totals */}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Shipping:</span>
                    <span className="text-green-500">Free</span>
                  </div>
                  <div className="flex justify-between font-medium text-base border-t pt-3">
                    <span>Total:</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                </div>

                {/* Payment Methods */}
                <div className="mt-6 space-y-3">
                  <h5 className="font-medium">Payment Method</h5>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="bank"
                      checked={paymentMethod === "bank"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 accent-Secondary2_color"
                    />
                    <span className="text-sm">Bank Transfer</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      value="cash"
                      checked={paymentMethod === "cash"}
                      onChange={(e) => setPaymentMethod(e.target.value)}
                      className="w-4 h-4 accent-Secondary2_color"
                    />
                    <span className="text-sm">Cash on Delivery</span>
                  </label>
                </div>

                {/* Coupon Code */}
                <div className="mt-6 flex gap-2">
                  <input
                    type="text"
                    placeholder="Coupon Code"
                    className="flex-1 px-4 py-3 border rounded text-sm outline-none focus:border-Secondary2_color"
                  />
                  <button
                    type="button"
                    className="px-4 py-3 bg-Secondary2_color text-white text-sm font-medium rounded hover:bg-opacity-90 transition-colors"
                  >
                    Apply
                  </button>
                </div>

                {/* Place Order Button */}
                <button
                  type="submit"
                  className="w-full mt-6 py-4 bg-Secondary2_color text-white font-medium font-poppins rounded hover:bg-opacity-90 transition-colors"
                >
                  Place Order
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
