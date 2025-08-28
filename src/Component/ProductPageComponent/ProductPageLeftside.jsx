import React from "react";
import { useProductCategoryListQuery } from "../../Features/AllSlice/Api/ProductApi";

const ProductPageLeftside = () => {
  const { data, error, isLoading } = useProductCategoryListQuery();

  return (
    <div className="flex flex-col gap-[20px]">
      {/* shop by category */}
      <div>
        <div className="mb-4">
          <h1 className="font-bold text-xl font-poppins ">Shop By Category</h1>
        </div>
        {isLoading ? (
          <ul className="flex flex-col gap-[16px]  ">
            {Array(10)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center hover:bg-gray-200 transition-all"
                >
                  <li className="flex animate-pulse bg-gray-300 w-full py-3 my-3"></li>
                </div>
              ))}
          </ul>
        ) : (
          <ul className="flex flex-col gap-[16px]  ">
            {data?.map((item, index) => {
              return (
                <li key={index} className="flex items-center text-[16px] p-1 font-normal font-poppins text-black_color transition-all hover:bg-gray-200 hover:translate-1 capitalize  cursor-pointer">
                  {item}
                </li>
              );
            })}
          </ul>
        )}
      </div>
      {/* shop by category */}
      {/* shop by color */}
      <div className="flex flex-col gap-3">
        <h3 className="font-bold text-xl font-poppins">Shop By Color</h3>
        <div>
          <ul className="flex flex-col gap-[16px]  ">
            <li className="flex items-center gap-2.5 text-[16px] p-1 font-normal font-poppins text-black_color transition-all hover:bg-gray-200 hover:translate-1 capitalize  cursor-pointer">
              <span className="bg-black w-3 h-3 rounded-full"></span>
              Color 1
            </li>
            <li className="flex items-center gap-2.5 text-[16px] p-1 font-normal font-poppins text-black_color transition-all hover:bg-gray-200 hover:translate-1 capitalize  cursor-pointer">
              <span className="bg-red-500 w-3 h-3 rounded-full"></span>
              Color 2
            </li>
            <li className="flex items-center gap-2.5 text-[16px] p-1 font-normal font-poppins text-black_color transition-all hover:bg-gray-200 hover:translate-1 capitalize cursor-pointer">
              <span className="bg-green-600 w-3 h-3 rounded-full"></span>
              Color 3
            </li>
          </ul>
        </div>
      </div>
      {/* shop by color */}
    </div>
  );
};

export default ProductPageLeftside;
