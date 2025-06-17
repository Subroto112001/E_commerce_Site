import React from "react";
import CountdownTimer from "../TimerCOmponent/Index";

const Heading = ({ HeadingTitle, SeconderyHeading, showtimer }) => {
 

  return (
    <div>
      <div className="flex flex-row gap-[16px] items-center">
        <div className="w-[20px] h-[40px] bg-Secondary2_color rounded "></div>
        <span className="text-[16px] font-semibold font-poppins text-Secondary2_color">
          {HeadingTitle}
        </span>
      </div>
      <div className="mt-[24px] flex gap-[87px]">
        <h3 className="text-[36px] font-semibold font-inter text-black">
          {SeconderyHeading}
        </h3>{" "}
        {showtimer && <CountdownTimer />}
      </div>
    </div>
  );
};

export default Heading;
