import React, { useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useProductCategoryListQuery } from "../../Features/AllSlice/Api/ProductApi";
import {
  setCategory,
  clearCategory,
  setPriceRange,
  setSortBy,
  selectCategory,
  selectPriceRange,
  selectSortBy,
  resetFilters,
} from "../../Features/AllSlice/filterSlice";

const ProductPageLeftside = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const { data, isLoading } = useProductCategoryListQuery();

  const selectedCategory =
    useSelector(selectCategory) || searchParams.get("category");
  const priceRange = useSelector(selectPriceRange);
  const sortBy = useSelector(selectSortBy);

  const [localPriceMax, setLocalPriceMax] = useState(priceRange.max);

  const handleCategoryClick = (category) => {
    if (selectedCategory === category) {
      dispatch(clearCategory());
      setSearchParams({});
    } else {
      dispatch(setCategory(category));
      setSearchParams({ category });
    }
  };

  const handlePriceChange = (e) => {
    const max = Number(e.target.value);
    setLocalPriceMax(max);
  };

  const handlePriceApply = () => {
    dispatch(setPriceRange({ min: 0, max: localPriceMax }));
  };

  const handleSortChange = (e) => {
    dispatch(setSortBy(e.target.value));
  };

  const handleResetFilters = () => {
    dispatch(resetFilters());
    setSearchParams({});
    setLocalPriceMax(1000);
  };

  return (
    <div className="flex flex-col gap-8 h-full font-noto-serif">
      {/* Reset Filters Button */}
      {(selectedCategory || priceRange.max < 1000 || sortBy !== "default") && (
        <button
          onClick={handleResetFilters}
          className="w-full py-2 text-sm text-Secondary2_color border border-Secondary2_color rounded hover:bg-Secondary2_color hover:text-white transition-colors"
        >
          Reset All Filters
        </button>
      )}

      {/* Shop By Category */}
      <div className="flex flex-col">
        <div className="mb-5 border-b border-gray-100 md:border-none pb-2 md:pb-0">
          <h1 className="font-bold text-lg md:text-xl font-poppins text-black">
            Shop By Category
          </h1>
        </div>

        {/* Scrollable container for many categories on mobile */}
        <div className="max-h-[300px] md:max-h-none overflow-y-auto custom-scrollbar">
          {isLoading ? (
            <ul className="flex flex-col gap-3">
              {Array(6)
                .fill("")
                .map((_, index) => (
                  <li
                    key={index}
                    className="animate-pulse bg-gray-200 h-10 w-full rounded-sm"
                  ></li>
                ))}
            </ul>
          ) : (
            <ul className="flex flex-col gap-1 md:gap-2">
              {data?.map((item, index) => (
                <li
                  key={index}
                  onClick={() => handleCategoryClick(item)}
                  className={`flex items-center text-[14px] md:text-[16px] py-2 md:py-1 px-2 font-normal font-poppins transition-all capitalize cursor-pointer rounded-sm ${
                    selectedCategory === item
                      ? "bg-Secondary2_color text-white"
                      : "text-gray-700 hover:bg-gray-100 hover:text-Secondary2_color active:bg-gray-200"
                  }`}
                >
                  {item.replace("-", " ")}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {/* Sort By */}
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg md:text-xl font-poppins text-black">
          Sort By
        </h3>
        <select
          value={sortBy}
          onChange={handleSortChange}
          className="w-full py-2 px-3 border border-gray-300 rounded-sm text-sm focus:ring-1 focus:ring-Secondary2_color outline-none"
        >
          <option value="default">Default</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Best Rating</option>
        </select>
      </div>

      {/* Adding a Shop By Price for completeness */}
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-lg md:text-xl font-poppins text-black">
          Price Range
        </h3>
        <div className="px-2">
          <input
            type="range"
            className="w-full accent-Secondary2_color cursor-pointer"
            min="0"
            max="2000"
            value={localPriceMax}
            onChange={handlePriceChange}
          />
          <div className="flex justify-between text-xs mt-2 text-gray-500">
            <span>$0</span>
            <span className="font-semibold text-black">${localPriceMax}</span>
          </div>
          <button
            onClick={handlePriceApply}
            className="w-full mt-3 py-2 text-sm bg-black text-white rounded hover:bg-Secondary2_color transition-colors"
          >
            Apply Price Filter
          </button>
        </div>
      </div>

      {/* Custom Scrollbar CSS */}
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #db4444;
          border-radius: 10px;
        }
      `}</style>
    </div>
  );
};

export default ProductPageLeftside;
