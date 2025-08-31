import React from "react";
import { CiPaperplane, CiTwitter } from "react-icons/ci";
import QrCode from "../../../assets/Footer/QrCode.png";
import PlayStore from "../../../assets/Footer/PlayStore.png";
import AppleStore from "../../../assets/Footer/AppleStore.png";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
export const Footer = () => {
  return (
    <div className="bg-black pt-[135px]  pb-[24px]">
      <div className=" container  ">
        <div className=" ">
          <div className="flex justify-between">
            <div className="one flex flex-col gap-[24px]">
              <h1 className="font-bold font-inter text-[24px] text-white">
                Exclusive
              </h1>
              <h1 className="font-medium font-poppins text-[20px] text-white">
                Subscribe
              </h1>
              <div className="flex flex-col gap-[16px]">
                <h1 className="font-normal font-poppins text-[16px] text-white">
                  Get 10% off your first order
                </h1>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="border border-white rounded text-white py-[12px] px-[16px] "
                  />
                  <span className="absolute text-white text-[24px] top-[30%] right-[15px] cursor-pointer">
                    <CiPaperplane />
                  </span>
                </div>
              </div>
            </div>
            <div className="two flex flex-col gap-[24px]">
              <h3 className="text-[20px] font-medium font-poppins text-white">
                Support
              </h3>
              <div className="flex flex-col gap-[16px]">
                <p className="text-[16px] font-normal font-poppins text-white max-w-[175px]">
                  Dhanmondi- 15, Dhaka, DH 1209, Bangladesh.
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  barmanntech@gmail.com
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  +8801764298643
                </p>
              </div>
            </div>
            <div className="three flex flex-col gap-[24px]">
              <h3 className="text-[20px] font-medium font-poppins text-white">
                Account
              </h3>
              <div className="flex flex-col gap-[16px]">
                <p className="text-[16px] font-normal font-poppins text-white max-w-[175px]">
                  My Account
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  Login / Register
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  Cart
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  Wishlist
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  Shop
                </p>
              </div>
            </div>
            <div className="four flex flex-col gap-[24px]">
              {" "}
              <h3 className="text-[20px] font-medium font-poppins text-white">
                Quick Link
              </h3>
              <div className="flex flex-col gap-[16px]">
                <p className="text-[16px] font-normal font-poppins text-white max-w-[175px]">
                  Privacy Policy
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  Terms Of Use
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  Cart
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  FAQ
                </p>
                <p className="text-[16px] font-normal font-poppins text-white ">
                  Contact
                </p>
              </div>
            </div>
            <div className="five flex flex-col gap-[24px]">
              <h2 className="text-[20px] font-medium font-poppins text-white">
                Download App
              </h2>
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-medium font-poppins text-[12px] text-text_color">
                  Save $3 with App New User Only
                </h3>
                <div className="flex flex-row gap-[10px]">
                  <div className="w-[75px] h-[75px]">
                    <picture>
                      <img
                        src={QrCode}
                        alt={QrCode}
                        className="w-full h-full"
                      />
                    </picture>
                  </div>
                  <div className="flex flex-col justify-between items-center">
                    <div className="w-[104px] h-[30px]">
                      <picture>
                        <img
                          src={PlayStore}
                          alt={PlayStore}
                          className="w-full h-full"
                        />
                      </picture>
                    </div>
                    <div className="w-[104px] h-[30px]">
                      <picture>
                        <img
                          src={AppleStore}
                          alt={AppleStore}
                          className="w-full h-full"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-row gap-[24px] text-[24px] text-white">
                <span className="cursor-pointer">
                  <RiFacebookLine />
                </span>
                <span className="cursor-pointer">
                  <CiTwitter />
                </span>
                <span className="cursor-pointer">
                  <IoLogoInstagram />
                </span>
                <span className="cursor-pointer">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-[76px]  border-t border-[#3D3D3D]">
        <h3 className="text-[#3D3D3D] text-[16px] font-poppins font-normal flex justify-center items-center gap-[6px] pt-4">
          <FaRegCopyright />
          Copyright Barman & Code 2025. All right reserved
        </h3>
      </div>
    </div>
  );
};
