import React from 'react';

const ProductLoading = () => {
  // Skeleton component for reusable loading elements
  const Skeleton = ({ className, rounded = false }) => (
    <div 
      className={`animate-pulse bg-gray-200 ${rounded ? 'rounded-full' : 'rounded'} ${className}`}
    />
  );

  return (
    <div className="flex flex-row justify-between py-10">
      {/* Left side (Images) */}
      <div className="w-[55%] flex items-start gap-[30px]">
        {/* Small images */}
        <div className="flex flex-col gap-[16px]">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="px-[12px] py-[8px] bg-secondary_color rounded-[4px]"
            >
              <Skeleton className="w-[90px] h-[90px]" />
            </div>
          ))}
        </div>

        {/* Main image */}
        <div className="pt-[154px] pb-[131px] px-[27px] bg-secondary_color rounded-[4px]">
          <Skeleton className="w-[416px] h-[343px]" />
        </div>
      </div>

      {/* Right side (Details) */}
      <div className="w-[40%]">
        <div className="flex flex-col gap-y-6">
          {/* Title + Rating */}
          <div className="flex flex-col gap-4 pb-6 border-b border-text2-color">
            {/* Title */}
            <Skeleton className="h-8 w-3/4" />
            
            {/* Rating section */}
            <div className="flex flex-row items-center gap-2.5">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <Skeleton key={i} className="w-4 h-4" />
                ))}
              </div>
              <Skeleton className="h-4 w-12" />
              <div className="h-[14px] border border-gray-300"></div>
              <Skeleton className="h-4 w-16" />
            </div>
            
            {/* Price */}
            <Skeleton className="h-8 w-24" />
            
            {/* Description */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
          </div>

          {/* Color & Size */}
          <div className="flex flex-col gap-y-6">
            {/* Colors */}
            <div className="flex flex-row gap-x-6 items-center">
              <Skeleton className="h-6 w-16" />
              <div className="flex gap-2.5 flex-row items-center">
                <Skeleton className="w-[24px] h-[24px]" rounded />
                <Skeleton className="w-[24px] h-[24px]" rounded />
              </div>
            </div>

            {/* Sizes */}
            <div className="flex flex-row gap-x-6 items-center">
              <Skeleton className="h-6 w-12" />
              <div className="flex flex-row items-center gap-4">
                {[...Array(4)].map((_, i) => (
                  <Skeleton key={i} className="h-8 w-8" />
                ))}
              </div>
            </div>

            {/* Quantity & Buttons */}
            <div className="flex flex-row gap-4 items-center">
              {/* Quantity selector */}
              <div className="flex items-center border rounded">
                <Skeleton className="w-12 h-12" />
                <Skeleton className="w-16 h-12" />
                <Skeleton className="w-12 h-12" />
              </div>
              {/* Buy Now button */}
              <Skeleton className="h-12 w-32" />
              {/* Heart button */}
              <Skeleton className="h-12 w-12" />
            </div>
          </div>

          {/* Delivery / Return Info */}
          <div className="flex flex-col border rounded w-[420px]">
            <div className="py-[20px] px-[16px] border-b">
              <div className="flex flex-row gap-4">
                <Skeleton className="w-[45px] h-[45px]" />
                <div className="flex flex-col gap-2 flex-1">
                  <Skeleton className="h-4 w-24" />
                  <Skeleton className="h-3 w-48" />
                </div>
              </div>
            </div>
            <div className="py-[20px] px-[16px]">
              <div className="flex flex-row gap-4">
                <Skeleton className="w-[45px] h-[45px]" />
                <div className="flex flex-col gap-2 flex-1">
                  <Skeleton className="h-4 w-28" />
                  <Skeleton className="h-3 w-40" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLoading;