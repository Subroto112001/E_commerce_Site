import React from "react";
import { useNavigate } from "react-router-dom";
import CountdownTimer from "../TimerCOmponent/Index";

const Heading = ({ HeadingTitle, SeconderyHeading, showtimer, isButton }) => {
  const navigate = useNavigate();

  return (
    <div className="w-full font-noto-serif">
      {/* Label Section */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-5 h-10 bg-Secondary2_color rounded-sm"></div>
        <span className="text-sm md:text-base font-semibold text-Secondary2_color font-poppins">
          {HeadingTitle}
        </span>
      </div>

      {/* Title & Button Row */}
      <div className="flex justify-between items-end gap-2">
        <div className="flex flex-col md:flex-row md:items-end gap-4 md:gap-20">
          <h3 className="text-xl sm:text-2xl md:text-4xl font-semibold font-inter text-black leading-tight">
            {SeconderyHeading}
          </h3>
          {showtimer && (
            <div className="pb-1">
              <CountdownTimer />
            </div>
          )}
        </div>

        {isButton && (
          <button
            onClick={() => navigate("/product")}
            className="bg-Secondary2_color hover:opacity-90 active:scale-95 transition-all text-white font-poppins font-medium text-xs md:text-base px-5 md:px-10 h-10 md:h-14 rounded whitespace-nowrap cursor-pointer"
          >
            View All
          </button>
        )}
      </div>
    </div>
  );
};

export default Heading;
