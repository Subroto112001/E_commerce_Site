import React from "react";
import { string } from "yup";

const Header = () => {
  return (
    <div className=" bg-black_color">
      <div className=" container">
        <div className="flex justify-between py-[15px] items-center">
          <div className="hidden md:block"></div>
          <div className="">
            <h3 className="text-white hidden md:block text-[14px] font-normal font-poppins">
              Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!
            </h3>
            <h3 className="text-white md:hidden text-[14px] font-normal font-poppins">
              {new String(`    Summer Sale For All Swim Suits And Free Express Delivery - OFF
              50%!`)
                .slice(0, 30)
                .concat("....")}
            </h3>
          </div>
          <div className="w-[20%]">
            <select
              name=""
              id=""
              className="text-white bg-transparent text-[14px] font-normal font-poppins"
            >
              <option value="#" className="text-black">
                English
              </option>
              <option value="#" className="text-black">
                Bangla
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
