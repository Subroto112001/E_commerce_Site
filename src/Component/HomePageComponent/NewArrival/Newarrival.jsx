import React from "react";
import Heading from "../../CommonComponent/Heading";
import PlayStation5 from "../../../assets/NewArrival/NewArrival1.png"
import WomenCollection from "../../../assets/NewArrival//WomenCollection.png";
import Speaker from "../../../assets/NewArrival//Speaker.png";
import Perfume from "../../../assets/NewArrival//Perfume.png";
import { NavLink } from "react-router-dom";
const Newarrival = () => {
  return (
    <div className="container">
      <div className="pt-[140px]">
        <Heading
          HeadingTitle={"Featured"}
          SeconderyHeading={"New Arrival"}
          showtimer={false}
          isButton={false}
        />
      </div>

      <div className="flex flex-row justify-between items-center mt-[60px]">
        <div className="left bg-black pt-[89px] px-[30px] relative group">
          <picture>
            <img src={PlayStation5} alt={PlayStation5} />
          </picture>
          <div className="absolute left-[32px] bottom-[32px] ">
            <div className="flex flex-col gap-[16px]">
              <h1 className="text-[24px] font-semibold font-inter text-white">
                Play Station 5
              </h1>
              <p className="font-normal font-poppins text-[14px] text-text_color max-w-[242px]">
                Black and White version of the PS5 coming out on sale.
              </p>
              <div>
                <NavLink className="text-white font-medium font-poppins text-[16px] border-b ">
                  Shop Now
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="right gap-[32px] justify-between  flex flex-col">
          <div className="Upper pl-[138px] pb-[2px] bg-black relative">
            <picture>
              <img src={WomenCollection} alt={WomenCollection} />
            </picture>
            <div className="absolute left-[32px] bottom-[32px] ">
              <div className="flex flex-col gap-[16px]">
                <h1 className="text-[24px] font-semibold font-inter text-white">
                  Women’s Collections
                </h1>
                <p className="font-normal font-poppins text-[14px] text-text_color max-w-[242px]">
                  Featured woman collections that give you another vibe.
                </p>
                <div>
                  <NavLink className="text-white font-medium font-poppins text-[16px] border-b ">
                    Shop Now
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          <div className="Down flex flex-row justify-between">
            <div className="left p-[31px] bg-black relative">
              <picture>
                <img src={Speaker} alt={Speaker} />
              </picture>
              <div className="absolute left-[32px] bottom-[32px] ">
                <div className="flex flex-col gap-[8px]">
                  <h1 className="text-[24px] font-semibold font-inter text-white">
                    Speakers
                  </h1>
                  <p className="font-normal font-poppins text-[14px] text-text_color max-w-[242px]">
                    Amazon wireless speakers
                  </p>
                  <div>
                    <NavLink className="text-white font-medium font-poppins text-[16px] border-b ">
                      Shop Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
            <div className="right p-[30px] bg-black relative">
              <picture>
                <img src={Perfume} alt={Perfume} />
              </picture>
              <div className="absolute left-[32px] bottom-[32px] ">
                <div className="flex flex-col gap-[8px]">
                  <h1 className="text-[24px] font-semibold font-inter text-white">
                    Perfume
                  </h1>
                  <p className="font-normal font-poppins text-[14px] text-text_color max-w-[242px]">
                    GUCCI INTENSE OUD EDP
                  </p>
                  <div>
                    <NavLink className="text-white font-medium font-poppins text-[16px] border-b ">
                      Shop Now
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newarrival;
