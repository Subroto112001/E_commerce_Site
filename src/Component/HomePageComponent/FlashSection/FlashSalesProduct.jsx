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
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
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

  return (
    <div className="relative">
      <div className="slider-container ">
        <Slider {...settings}>
          {FlashSalesItem.map((item) => (
            <div key={item.id}>
              <div className="w-[270px] h-[270px] bg-secondary_color flex justify-center items-center relative group ">
                <picture>
                  <img src={item.picture} alt={item.name} />
                </picture>
                {/* absolute item will bw here */}
                <div className="absolute top-[12px] left-[12px] bg-Secondary2_color inline-block px-[12px] py-[4px] rounded ">
                  <span className="font-poppins font-normal text-[12px] text-white">
                    {item.discount}
                  </span>
                </div>
                {/* absolute item will bw here */}

                {/* absolute item2 will bw here */}
                <div className="flex flex-col absolute top-[12px] right-[12px] text-[16px] gap-[8px]">
                  <span className="bg-white rounded-full p-[10px] cursor-pointer hover:bg-Secondary2_color hover:text-white duration-300">
                    <FaRegHeart />
                  </span>
                  <span className="bg-white rounded-full p-[10px] cursor-pointer hover:bg-Secondary2_color hover:text-white duration-300">
                    <FiEye />
                  </span>
                </div>
                {/* absolute item2 will bw here */}
                {/* absolute item3 will bw here */}

                <div className="absolute bottom-0 cursor-pointer w-full bg-black rounded py-2 transition-all  opacity-0 group-hover:opacity-100 duration-300">
                  <h3 className="font-poppins font-medium  text-[16px] text-white text-center">
                    Add To Cart
                  </h3>
                </div>
                {/* absolute item3 will bw here */}
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
                <div className="flex gap-[8px] items-center">
                  <div className="flex text-yellow-400">
                    {[...new Array(5)].map((_, index) => (
                      <span>
                        <FaStar />
                      </span>
                    ))}
                  </div>
                  <div>
                    <span className="text-[14px] text-text2-color">{`(${item.rating})`}</span>
                  </div>
                </div>
              </div>
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
  );
};

export default FlashSalesProduct;
