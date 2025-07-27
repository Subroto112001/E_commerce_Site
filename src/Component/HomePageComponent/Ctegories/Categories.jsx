import React from "react";
import SoundBox from "../../../assets/Categories/Categories.png";
const Categories = () => {
  return (
    <div className="container pt-[140px]">
      <div className="p-[44px] bg-black flex flex-row items-center justify-between">
        <div className="left ">
          <div className="flex flex-col justify-center gap-8">
            <h3 className="text-Button1_color text-[16px] font-semibold font-poppins">
              Categories
            </h3>
            <p className="font-semibold text-[48px] font-inter text-white max-w-[443px] leading-[60px]">
              Enhance Your Music Experience
            </p>
            <div className="flex gap-[24px] flex-row">
              <div className="bg-white w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[16px] text-text2-color font-poppins font-semibold">
                  23
                </h3>
                <h3 className="text-[11px] text-text2-color font-poppins font-normal">
                  Hours
                </h3>
              </div>
              <div className="bg-white w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[16px] text-text2-color font-poppins font-semibold">
                  05
                </h3>
                <h3 className="text-[11px] text-text2-color font-poppins font-normal">
                  Days
                </h3>
              </div>

              <div className="bg-white w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[16px] text-text2-color font-poppins font-semibold">
                  59
                </h3>
                <h3 className="text-[11px] text-text2-color font-poppins font-normal">
                  Minutes
                </h3>
              </div>
              <div className="bg-white w-[62px] h-[62px] rounded-full flex flex-col justify-center items-center">
                <h3 className="text-[16px] text-text2-color font-poppins font-semibold">
                  35
                </h3>
                <h3 className="text-[11px] text-text2-color font-poppins font-normal">
                  Seconds
                </h3>
              </div>
                      </div>
                      <button className="w-[171px] cursor-pointer h-[56px] rounded bg-Button1_color text-white font-medium font-poppins text-[16px]">Buuy Now!</button>
          </div>
        </div>
        <div className="right">
          <picture>
            <img src={SoundBox} alt={SoundBox} />
          </picture>
        </div>
      </div>
    </div>
  );
};

export default Categories;
