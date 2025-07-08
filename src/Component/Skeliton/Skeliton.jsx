// SkeletonCard.jsx
import React from "react";

const SkeletonCard = () => {
  return (
    <div className="animate-pulse bg-gray-200 rounded-md p-4">
      <div className="h-[150px] bg-gray-300 rounded mb-4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
      <div className="h-4 bg-gray-300 rounded w-1/4"></div>
    </div>
  );
};

export default SkeletonCard;
