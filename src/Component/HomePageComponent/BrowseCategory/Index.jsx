import React from "react";
import Heading from "../../CommonComponent/Heading";

import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";

import { CiCamera, CiHeadphones, CiMobile4, CiMonitor } from "react-icons/ci";
import { BsSmartwatch } from "react-icons/bs";
import { PiGameControllerThin } from "react-icons/pi";
import { NavLink } from "react-router-dom";

const BrowseCategroy = () => {
const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-60px] right-0 z-10 cursor-pointer bg-black text-white p-2 rounded-full"
        onClick={onClick}
      >
        <MdOutlineNavigateNext size={24} />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-60px] right-[60px] z-10 cursor-pointer bg-black text-white p-2 rounded-full"
        onClick={onClick}
      >
        <GrFormPrevious size={24} />
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

   const FlashSalesItem = [
      {
        id: 1,
        name: "Phones",
        icon: <CiMobile4 />,
        path: "/phones",
      },
      {
        id: 2,
        name: "Computers",
        icon: <CiMonitor />,
        path: "/computers",
      },
      {
        id: 3,
        name: "SmartWatch",
        icon: <BsSmartwatch />,
        path: "/smartwatch",
      },
      {
        id: 4,
        name: "Camera",
        icon: <CiCamera />,
        path: "/",
      },
  
      {
        id: 5,
        name: "HeadPhones",
        icon: <CiHeadphones />,
        path: "/headphones",
      },
      {
        id: 6,
        name: "Gaming",
        icon: <PiGameControllerThin />,
        path: "/gaming",
      },
    ];
  return (
    <div className="container mx-auto">
      <div className="mt-[80px] flex gap-4 ">
        <Heading
          HeadingTitle={"Categories"}
          SeconderyHeading={"Browse By Category"}
          showtimer={false}
          isButton={false}
        />
      </div>
      <div className="mt-[40px]  ">
        <div className="relative border-b border-gray-400  pb-[70px]">
          <div className="slider-container ">
            <Slider {...settings}>
              {FlashSalesItem.map((item) => (
                <NavLink to={item.path} className="text-black">
                  {({ isActive, isPending }) => (
                    <div
                      className={`w-[170px] h-[145px] border border-[rgba(0,0,0,0.3)] flex justify-center items-center relative group ${
                        isActive ? "bg-red-500" : ""
                      }`}
                    >
                      <span
                        className={`text-4xl ${isActive ? "text-white" : ""}`}
                      >
                        {item.icon}
                      </span>
                      <div className="absolute bottom-[24px]">
                        <h3
                          className={`font-poppins text-[16px] font-medium ${
                            isActive ? "text-white" : ""
                          }`}
                        >
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  )}
                </NavLink>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrowseCategroy;
