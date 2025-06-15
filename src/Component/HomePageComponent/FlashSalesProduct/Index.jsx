import React from "react";
import Image1 from "../../../assets/Flash/GamingJoyestick.png";

import Image2 from "../../../assets/Flash/KeyBorad.png";
import Image3 from "../../../assets/Flash/Chair.png";
import Image4 from "../../../assets/Flash/Monitorr.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
const FlashSalesProduct = () => {
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
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  /**
   * todo : flash sales items will be here in a array array of object
   *
   * */
  const FlashSalesItem = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      prevpRICE: "$160",
      rating: "88",
      picture: Image1,
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      prevpRICE: "$1160",
      rating: "75",
      picture: Image2,
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$1370",
      prevpRICE: "$400",
      rating: "99",
      picture: Image4,
    },
    {
      id: 4,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image3,
    },
    {
      id: 5,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
    },
    {
      id: 6,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
    },
    {
      id: 7,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
    },
    {
      id: 8,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
    },
    {
      id: 9,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
    },
  ];
  return (
    <div className="relative">
      <div className="slider-container ">
        <Slider {...settings} className="">
          {FlashSalesItem.map((item) => (
            <div key={item.id}>
              <div className="w-[270px] h-[270px] bg-secondary_color flex justify-center items-center">
                <picture>
                  <img src={item.picture} alt={item.name} />
                </picture>
              </div>
              <div className="mt-[16px]">
                <h3 className="font-poppins text-[16px] font-medium text-black">
                  {item.name}
                </h3>
                <div className="flex gap-[12px]">
                  <span className="font-poppins text-[16px] font-medium text-Secondary2_color">
                    {item.price}
                  </span>
                  <span className="font-poppins text-[16px] font-medium text-black line-through">
                    {item.prevpRICE}
                  </span>
                </div>
                <div>
                  
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default FlashSalesProduct;
