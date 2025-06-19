import React from "react";
import Heading from "../../CommonComponent/Heading";

import ItemComponent from "../../CommonComponent/ItemComponent";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Image1 from "../../../assets/Flash/GamingJoyestick.png";

import Image2 from "../../../assets/Flash/KeyBorad.png";
import Image3 from "../../../assets/Flash/Chair.png";
import Image4 from "../../../assets/Flash/Monitorr.png";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const FlashPart = () => {
  const FlashSalesItem = [
    {
      id: 1,
      name: "HAVIT HV-G92 Gamepad",
      price: "$120",
      prevpRICE: "$160",
      rating: "88",
      picture: Image1,
      discount: "-40%",
    },
    {
      id: 2,
      name: "AK-900 Wired Keyboard",
      price: "$960",
      prevpRICE: "$1160",
      rating: "75",
      picture: Image2,
      discount: "-35%",
    },
    {
      id: 3,
      name: "IPS LCD Gaming Monitor",
      price: "$1370",
      prevpRICE: "$400",
      rating: "99",
      picture: Image4,
      discount: "-30%",
    },
    {
      id: 4,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image3,
      discount: "-25%",
    },
    {
      id: 5,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
      discount: "-40%",
    },
    {
      id: 6,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
      discount: "-40%",
    },
    {
      id: 7,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
      discount: "-40%",
    },
    {
      id: 8,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
      discount: "-40%",
    },
    {
      id: 9,
      name: "S-Series Comfort Chair ",
      price: "$375",
      prevpRICE: "$400",
      rating: "99",
      picture: Image2,
      discount: "-40%",
    },
  ];

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

  return (
    <div className="container  ">
      <div className="mt-[140px] flex gap-4 ">
        <Heading
          HeadingTitle={"Today's"}
          SeconderyHeading={"Flash Sales"}
          showtimer={true}
          isButton={false}
        />
      </div>
      <div className="mt-[40px] border-b border-gray-400  pb-[70px]">
        <div className="relative">
          <div className="slider-container ">
            <Slider {...settings}>
              {FlashSalesItem.map((item) => (
                <div>
                  <ItemComponent
                    itemName={item.name}
                    itemPicture={item.picture}
                    itemDiscount={item.discount}
                    itemPrice={item.price}
                    itemPrevpRICE={item.prevpRICE}
                    itemRating={item.rating}
                    IsDiscount={true}
                    isAddcrat={true}
                  />
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center items-center mt-[60px]">
            <button className="bg-Secondary2_color px-[48px] cursor-pointer rounded py-[16px] text-[16px] text-white font-medium font-poppins">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashPart;
