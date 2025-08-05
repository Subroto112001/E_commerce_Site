import React from "react";
import CountdownTimer from "../TimerCOmponent/Index";

const Heading = ({
  HeadingTitle,
  SeconderyHeading,
  showtimer,
  isButton,
  isSeccendorytitle,
}) => {
  return (
    <div className="w-full">
      <div className="flex flex-row gap-[16px] items-center">
        <div className="w-[20px] h-[40px] bg-Secondary2_color rounded "></div>
        <span className="text-[16px] font-semibold font-poppins text-Secondary2_color">
          {HeadingTitle}
        </span>
      </div>
      <div className="flex justify-between items-center w-full">
        <div className="mt-[24px] flex gap-[87px]">
          <h3 className="text-[36px] font-semibold font-inter text-black">
            {SeconderyHeading}
          </h3>
          {showtimer && <CountdownTimer />}
        </div>
        <div>
          {isButton && (
            <button className="cursor-pointer text-[16px] bg-Secondary2_color rounded text-white font-poppins font-medium px-[48px] py-[16px]">
              View All
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Heading;
