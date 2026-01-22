import React, { useState } from "react";
import { CiPaperplane, CiTwitter } from "react-icons/ci";
import QrCode from "../../../assets/Footer/QrCode.png";
import PlayStore from "../../../assets/Footer/PlayStore.png";
import AppleStore from "../../../assets/Footer/AppleStore.png";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaRegCopyright } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { NavLink } from "react-router-dom";
import "../../../Style/Footer.css";

export const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="bg-black pt-12 md:pt-[135px] pb-[24px] font-noto-serif">
      <div className="container mx-auto px-6 md:px-0">
        <div className="flex flex-col lg:flex-row lg:justify-between gap-10 lg:gap-4">
          {/* 1. Subscribe Section (Always visible) */}
          <div className="animate-footer flex flex-col gap-[24px] min-w-[200px]">
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
              <div className="relative w-full max-w-[250px] lg:max-w-[217px]">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent border border-white rounded text-white py-[12px] px-[16px] focus:outline-none focus:border-Secondary2_color transition-all"
                />
                <span className="absolute text-white text-[24px] top-1/2 -translate-y-1/2 right-[15px] cursor-pointer">
                  <CiPaperplane />
                </span>
              </div>
            </div>
          </div>

          {/* 2. Support Section */}
          <div
            className="animate-footer border-b border-gray-800 lg:border-none pb-4 lg:pb-0"
            style={{ animationDelay: "100ms" }}
          >
            <div
              className="flex justify-between items-center lg:block cursor-pointer lg:cursor-default"
              onClick={() => toggleSection("support")}
            >
              <h3 className="text-[20px] font-medium font-poppins text-white mb-0 lg:mb-[24px]">
                Support
              </h3>
              <IoIosArrowDown
                className={`text-white lg:hidden transition-transform ${openSection === "support" ? "rotate-180" : ""}`}
              />
            </div>
            <div
              className={`flex flex-col gap-[16px] mt-4 lg:mt-0 ${openSection === "support" ? "block" : "hidden lg:flex"}`}
            >
              <p className="text-[16px] font-normal font-poppins text-white max-w-[175px]">
                Dhanmondi- 15, Dhaka, Bangladesh.
              </p>
              <p className="text-[16px] font-normal font-poppins text-white break-words">
                barmanntech@gmail.com
              </p>
              <p className="text-[16px] font-normal font-poppins text-white">
                +8801764298643
              </p>
            </div>
          </div>

          {/* 3. Account Section */}
          <div
            className="animate-footer border-b border-gray-800 lg:border-none pb-4 lg:pb-0"
            style={{ animationDelay: "200ms" }}
          >
            <div
              className="flex justify-between items-center lg:block cursor-pointer lg:cursor-default"
              onClick={() => toggleSection("account")}
            >
              <h3 className="text-[20px] font-medium font-poppins text-white mb-0 lg:mb-[24px]">
                Account
              </h3>
              <IoIosArrowDown
                className={`text-white lg:hidden transition-transform ${openSection === "account" ? "rotate-180" : ""}`}
              />
            </div>
            <div
              className={`flex flex-col gap-[16px] mt-4 lg:mt-0 ${openSection === "account" ? "block" : "hidden lg:flex"}`}
            >
              {[
                { name: "My Account", path: "/account" },
                { name: "Login / Register", path: "/login" },
                { name: "Cart", path: "/cart" },
                { name: "Wishlist", path: "/wishlist" },
                { name: "Shop", path: "/product" },
              ].map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="text-[16px] font-normal font-poppins text-white hover:text-gray-400 cursor-pointer transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* 4. Quick Links */}
          <div
            className="animate-footer border-b border-gray-800 lg:border-none pb-4 lg:pb-0"
            style={{ animationDelay: "300ms" }}
          >
            <div
              className="flex justify-between items-center lg:block cursor-pointer lg:cursor-default"
              onClick={() => toggleSection("links")}
            >
              <h3 className="text-[20px] font-medium font-poppins text-white mb-0 lg:mb-[24px]">
                Quick Link
              </h3>
              <IoIosArrowDown
                className={`text-white lg:hidden transition-transform ${openSection === "links" ? "rotate-180" : ""}`}
              />
            </div>
            <div
              className={`flex flex-col gap-[16px] mt-4 lg:mt-0 ${openSection === "links" ? "block" : "hidden lg:flex"}`}
            >
              {[
                { name: "Privacy Policy", path: "/about" },
                { name: "Terms Of Use", path: "/about" },
                { name: "FAQ", path: "/contact" },
                { name: "Contact", path: "/contact" },
              ].map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className="text-[16px] font-normal font-poppins text-white hover:text-gray-400 cursor-pointer transition-colors"
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </div>

          {/* 5. Download App Section */}
          <div
            className="animate-footer flex flex-col gap-[24px]"
            style={{ animationDelay: "400ms" }}
          >
            <h2 className="text-[20px] font-medium font-poppins text-white pt-4 lg:pt-0">
              Download App
            </h2>
            <div className="flex flex-col gap-[8px]">
              <h3 className="font-medium font-poppins text-[12px] text-gray-400">
                Save $3 with App New User Only
              </h3>
              <div className="flex flex-row gap-[10px]">
                <img src={QrCode} alt="QR" className="w-[75px] h-[75px]" />
                <div className="flex flex-col justify-between">
                  <img
                    src={PlayStore}
                    alt="PlayStore"
                    className="w-[104px] h-[30px] cursor-pointer"
                  />
                  <img
                    src={AppleStore}
                    alt="AppleStore"
                    className="w-[104px] h-[30px] cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-row gap-[24px] text-[24px] text-white">
              <RiFacebookLine className="cursor-pointer hover:scale-110 transition-transform" />
              <CiTwitter className="cursor-pointer hover:scale-110 transition-transform" />
              <IoLogoInstagram className="cursor-pointer hover:scale-110 transition-transform" />
              <FaLinkedinIn className="cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 md:mt-[76px] border-t border-[#3D3D3D] py-6 px-4 text-center">
        <h3 className="text-[#3D3D3D] text-[14px] font-poppins font-normal flex justify-center items-center gap-[6px]">
          <FaRegCopyright />
          Copyright Barman & Code 2025. All right reserved
        </h3>
      </div>
    </div>
  );
};
