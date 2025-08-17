import React from "react";
import { FaApple } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { TbMathGreater } from "react-icons/tb";
import { NavLink } from "react-router-dom";
import IPhone from "../../../assets/Iphone.png"

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: (dots) => (
      <div
        style={{ display: "flex", justifyContent: "center",  position : "relative"}}
      >
        <ul style={{ display: "flex", gap: "8px", position: "absolute", bottom: "40px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 rounded-full border-2 border-black bg-gray-300 slick-dot"></div>
    ),
  };
  
  
  
  const banneritem = [
    {
      id: 1,
      name: "Woman’s Fashion",
      subCategory: true,
    },
    {
      id: 2,
      name: "Men’s Fashion",
      subCategory: true,
    },
    {
      id: 3,
      name: "Electronics",
      subCategory: true,
    },
    {
      id: 4,
      name: "Home & Lifestyle",
      subCategory: true,
    },
    {
      id: 5,
      name: "Medicine",
      subCategory: true,
    },
    {
      id: 6,
      name: "Sports & Outdoor",
      subCategory: true,
    },
    {
      id: 7,
      name: "Baby’s & Toys",
      subCategory: true,
    },
    {
      id: 8,
      name: "Groceries & Pets",
      subCategory: true,
    },
    {
      id: 9,
      name: "Health & Beauty",
      subCategory: true,
    },
  ];

  const bannerPictureItem = [
    {
      id: 1,
      picture: IPhone,
    },
    {
      id: 2,
      picture: "Item2",
    },
    {
      id: 3,
      picture: "IPhone3",
    },
    {
      id: 4,
      picture: "IPhone4",
    },
    {
      id: 5,
      picture: "IPhone5",
    },
    {
      id: 6,
      picture: "IPhone6",
    },
    
  ];

  return (
    <div className="container">
      <div className="flex ">
        <div className="left w-[20%] border-r-[1px] border-gray-500">
          <div>
            <ul className="flex flex-col gap-[16px] pt-[40px] pr-[16px] ">
              {banneritem.map((item) => {
                return (
                  <li
                    key={item.id}
                    className="flex items-center justify-between text-[16px] p-1 font-normal font-poppins text-black_color transition-all hover:bg-gray-200 hover:translate-1  cursor-pointer"
                  >
                    {item.name}
                    <span>
                      <TbMathGreater />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="right w-[80%] pt-[40px] pl-[45px] ">
          <div className="slider-container">
            <Slider {...settings}>
              {bannerPictureItem.map((item) => (
                <div key={item.id}>
                  <div className="flex flex-row bg-black text-white">
                    <div className="left flex flex-col gap-[20px] pt-[58px] pl-[64px] pb-[47px]">
                      <div className="flex flex-row gap-[24px]  items-center">
                        <span className="text-[32px]">
                          <FaApple />
                        </span>
                        <h3 className="text-[16px] font-normal font-poppins">
                          iPhone 14 Series
                        </h3>
                      </div>

                      <div>
                        <h3 className="text-[48px] font-semibold font-inter w-[294px] ">
                          Up to 10% off Voucher
                        </h3>
                      </div>
                      <div className="">
                        <NavLink
                          to={"/shopNow"}
                          className={
                            " text-[16px] flex flex-row items-center gap-2 font-medium font-poppins"
                          }
                        >
                          <span className="border-b pb-[4px]">Shop Now</span>
                          <span>
                            <FaArrowRightLong />
                          </span>
                        </NavLink>
                      </div>
                    </div>
                    <div className="right">
                      <picture>
                        <img
                          src={item.picture}
                          alt={item.picture}
                          className="object-cover w-full h-full"
                        />
                      </picture>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
