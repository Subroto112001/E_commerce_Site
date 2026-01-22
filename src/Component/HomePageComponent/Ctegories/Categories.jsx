import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../../../Features/AllSlice/Api/ProductApi";

const Categories = () => {
  const navigate = useNavigate();
  const { data: productsData } = useGetProductQuery();

  // Get a featured product for display
  const featuredProduct = productsData?.products?.find(
    (p) => p.category === "laptops" || p.category === "smartphones",
  );

  const targetTime = new Date("2025-08-10T12:00:00").getTime();
  const [time, setTime] = useState({
    days: "00",
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetTime - now;

      if (difference > 0) {
        setTime({
          days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
            2,
            "0",
          ),
          hours: String(
            Math.floor((difference / (1000 * 60 * 60)) % 24),
          ).padStart(2, "0"),
          minutes: String(Math.floor((difference / (1000 * 60)) % 60)).padStart(
            2,
            "0",
          ),
          seconds: String(Math.floor((difference / 1000) % 60)).padStart(
            2,
            "0",
          ),
        });
      } else {
        clearInterval(timer);
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [targetTime]);

  const timerItems = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <div className="container mx-auto px-4 md:px-0 pt-10 md:pt-[140px] font-noto-serif">
      <div className="p-6 md:p-[44px] bg-black flex flex-col lg:flex-row items-center justify-between rounded-sm overflow-hidden relative">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 z-10 text-center lg:text-left order-2 lg:order-1">
          <div className="flex flex-col gap-4 md:gap-8">
            <h3 className="text-Button1_color text-sm md:text-[16px] font-semibold font-poppins">
              Categories
            </h3>
            <h2 className="font-semibold text-[32px] md:text-[48px] font-inter text-white max-w-[443px] leading-tight md:leading-[60px] mx-auto lg:mx-0">
              Enhance Your Music Experience
            </h2>

            {/* Timer Circles */}
            <div className="flex gap-3 md:gap-[24px] flex-row justify-center lg:justify-start my-4">
              {timerItems.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white w-[56px] h-[56px] md:w-[62px] md:h-[62px] rounded-full flex flex-col justify-center items-center shadow-lg"
                >
                  <h3 className="text-[14px] md:text-[16px] text-black font-poppins font-semibold leading-none">
                    {item.value}
                  </h3>
                  <h3 className="text-[10px] text-black font-poppins font-normal">
                    {item.label}
                  </h3>
                </div>
              ))}
            </div>

            <button
              onClick={() =>
                featuredProduct
                  ? navigate(`/product-details/${featuredProduct.id}`, {
                      state: { product: featuredProduct },
                    })
                  : navigate("/product")
              }
              className="w-full sm:w-[171px] mx-auto lg:mx-0 cursor-pointer h-[50px] md:h-[56px] rounded bg-Button1_color hover:bg-opacity-90 active:scale-95 transition-all text-white font-medium font-poppins text-[16px] shadow-lg"
            >
              Buy Now!
            </button>
          </div>
        </div>

        {/* Right Image with Glow Effect */}
        <div className="w-full lg:w-1/2 relative order-1 lg:order-2 mb-10 lg:mb-0 flex justify-center items-center">
          {/* Background Blur Glow */}
          <div className="absolute w-[80%] h-[80%] bg-white opacity-20 blur-[60px] md:blur-[100px] rounded-full"></div>

          <picture className="relative z-10 animate-fadeInRight">
            <img
              src={
                featuredProduct?.thumbnail ||
                "https://cdn.dummyjson.com/products/images/laptops/MacBook%20Pro%2014%20Inch%20Space%20Grey/1.png"
              }
              alt={featuredProduct?.title || "Featured Product"}
              className="w-full max-w-[300px] md:max-w-none h-auto object-contain drop-shadow-2xl"
            />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Categories;
