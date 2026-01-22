import React from "react";
import { deliveryItem } from "../../../Helpers/ItemProvider";

const Delivery = () => {
  return (
    <div className="container mx-auto px-4 md:px-0 font-noto-serif">
      {/* Grid Logic:
          1 col on mobile (small)
          2 cols on tablet (sm/md)
          3 cols on desktop (lg)
      */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-[88px] items-start justify-center pt-16 md:pt-[140px] pb-16 md:pb-[140px]">
        {deliveryItem.map((item, index) => (
          <div
            key={index}
            className="flex justify-center flex-col items-center group animate-fadeInUp"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            {/* Icon Wrapper with Outer Ring */}
            <div className="bg-[#C1C0C1] p-3 rounded-full transition-transform duration-300 group-hover:scale-110">
              <div className="bg-black text-white text-[25px] md:text-[30px] w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-full flex justify-center items-center shadow-lg">
                {item.icon}
              </div>
            </div>

            {/* Text Content */}
            <div className="flex flex-col justify-center items-center mt-6 text-center">
              <h3 className="text-[18px] md:text-[20px] font-bold font-poppins text-black uppercase tracking-wide">
                {item.heading}
              </h3>
              <p className="text-[12px] md:text-[14px] font-normal font-poppins text-black mt-2">
                {item.subHeading}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Delivery;
