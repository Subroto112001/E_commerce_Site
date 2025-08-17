import React from "react";

const LoadingComponent = () => {
  return (
    <div>
      <div className="mb-[20px] animate-pulse">
        {/* Image area */}
        <div className="w-[250px] h-[250px] bg-gray-200 flex justify-center items-center relative rounded-md">
          {/* Discount Badge */}
          <div className="absolute top-[12px] left-[12px] w-[50px] h-[20px] bg-gray-300 rounded"></div>

          {/* Action buttons */}
          <div className="flex flex-col absolute top-[12px] right-[12px] gap-[8px]">
            <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div>
            <div className="w-[40px] h-[40px] bg-gray-300 rounded-full"></div>
          </div>

          {/* Add to cart */}
          <div className="absolute bottom-0 w-full h-[40px] bg-gray-300 rounded opacity-80"></div>
        </div>

        {/* Title */}
        <div className="mt-[16px]">
          <div className="h-[20px] w-[180px] bg-gray-300 rounded mb-[8px]"></div>

          {/* Price */}
          <div className="flex gap-[12px] mb-[8px]">
            <div className="h-[20px] w-[60px] bg-gray-300 rounded"></div>
            <div className="h-[20px] w-[60px] bg-gray-300 rounded"></div>
          </div>

          {/* Rating */}
          <div className="flex gap-[8px] items-center">
            <div className="flex gap-[4px]">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-[16px] h-[16px] bg-gray-300 rounded"
                ></div>
              ))}
            </div>
            <div className="h-[16px] w-[30px] bg-gray-300 rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
