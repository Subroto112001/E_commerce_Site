import React, { useState } from "react";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";
import ProductPageLeftside from "../Component/ProductPageComponent/ProductPageLeftside";
import ProductPageRightside from "../Component/ProductPageComponent/ProductPageRightside";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2"; // Filter icon
import { IoClose } from "react-icons/io5";

const ProductPage = () => {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-0 font-noto-serif">
      <BreadCrumb />

      {/* Mobile Filter Toggle Button */}
      <div className="md:hidden flex justify-between items-center py-4 border-b border-gray-200 mb-6">
        <h2 className="text-lg font-semibold">Products</h2>
        <button
          onClick={() => setIsFilterOpen(true)}
          className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-sm text-sm"
        >
          <HiOutlineAdjustmentsHorizontal size={18} />
          Filters
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-0 md:gap-6 mb-[40px]">
        {/* Left Side (Sidebar) 
            On Mobile: A sliding overlay or hidden menu
            On Desktop: A fixed width sidebar
        */}
        <div
          className={`
          fixed inset-0 z-50 bg-white p-6 transition-transform duration-300 md:relative md:inset-auto md:z-0 md:p-0 md:translate-x-0 md:block md:w-[25%] lg:w-[20%] md:border-r md:border-gray-300 md:pr-4 md:my-[40px]
          ${isFilterOpen ? "translate-x-0" : "-translate-x-full"}
        `}
        >
          {/* Close button for mobile sidebar */}
          <div className="flex justify-between items-center md:hidden mb-8">
            <h3 className="text-xl font-bold">Filters</h3>
            <IoClose size={28} onClick={() => setIsFilterOpen(false)} />
          </div>

          <ProductPageLeftside />

          {/* Apply Filters Button for mobile */}
          <button
            onClick={() => setIsFilterOpen(false)}
            className="w-full bg-Secondary2_color text-white py-3 rounded-sm mt-8 md:hidden"
          >
            Apply Filters
          </button>
        </div>

        {/* Right Side (Product Grid) */}
        <div className="w-full md:w-[75%] lg:w-[80%] md:pl-4">
          <ProductPageRightside />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductPage);
