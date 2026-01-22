import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-black font-noto-serif">
      <div className="container mx-auto px-4">
        <div className="flex flex-row items-center justify-between py-3 md:py-[15px] gap-2">
          {/* Empty spacer for desktop centering */}
          <div className="hidden lg:block lg:w-[10%]"></div>

          {/* Promotion Text */}
          <div className="flex-1 text-center md:text-center overflow-hidden">
            {/* Desktop & Tablet Text */}
            <h3 className="text-white hidden sm:block text-[12px] md:text-[14px] font-normal font-poppins">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
              <button
                onClick={() => navigate("/product")}
                className="ml-2 font-semibold underline hover:text-gray-300 transition-all cursor-pointer"
              >
                ShopNow
              </button>
            </h3>

            {/* Mobile Text (Scrolls or remains clean) */}
            <h3 className="text-white sm:hidden text-[11px] font-normal font-poppins truncate max-w-[200px] mx-auto">
              Summer Sale - OFF 50%! Free Delivery
            </h3>
          </div>

          {/* Language Switcher */}
          <div className="flex justify-end w-auto md:w-[10%]">
            <select
              name="language"
              id="language-select"
              className="text-white bg-transparent text-[12px] md:text-[14px] font-normal font-poppins cursor-pointer outline-none focus:ring-0"
            >
              <option value="en" className="text-black">
                English
              </option>
              <option value="bn" className="text-black">
                Bangla
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
