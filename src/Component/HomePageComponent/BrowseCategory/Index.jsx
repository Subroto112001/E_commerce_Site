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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../Features/AllSlice/filterSlice";

const BrowseCategroy = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Navigation Arrows - Optimized for mobile touch and desktop alignment
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-[-60px] right-2 md:right-0 z-10 cursor-pointer bg-[#F5F5F5] hover:bg-Secondary2_color hover:text-white text-black w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all duration-300 shadow-sm"
      onClick={onClick}
    >
      <MdOutlineNavigateNext size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-[-60px] right-[55px] md:right-[60px] z-10 cursor-pointer bg-[#F5F5F5] hover:bg-Secondary2_color hover:text-white text-black w-[40px] h-[40px] flex items-center justify-center rounded-full transition-all duration-300 shadow-sm"
      onClick={onClick}
    >
      <GrFormPrevious size={24} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 4 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          swipeToSlide: true,
        },
      },
    ],
  };

  const FlashSalesItem = [
    { id: 1, name: "Phones", icon: <CiMobile4 />, category: "smartphones" },
    { id: 2, name: "Computers", icon: <CiMonitor />, category: "laptops" },
    {
      id: 3,
      name: "SmartWatch",
      icon: <BsSmartwatch />,
      category: "mens-watches",
    },
    {
      id: 4,
      name: "Camera",
      icon: <CiCamera />,
      category: "mobile-accessories",
    },
    { id: 5, name: "HeadPhones", icon: <CiHeadphones />, category: "tablets" },
    {
      id: 6,
      name: "Gaming",
      icon: <PiGameControllerThin />,
      category: "sports-accessories",
    },
  ];

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate(`/product?category=${category}`);
  };

  return (
    <div className="container mx-auto px-4 md:px-0 font-noto-serif">
      <div className="mt-[60px] md:mt-[80px] animate-fadeInUp">
        <Heading
          HeadingTitle={"Categories"}
          SeconderyHeading={"Browse By Category"}
          showtimer={false}
          isButton={false}
        />
      </div>

      <div className="mt-8 md:mt-[40px]">
        <div className="relative border-b border-gray-200 pb-[60px] md:pb-[70px]">
          <div className="slider-container">
            <Slider {...settings}>
              {FlashSalesItem.map((item) => (
                <div key={item.id} className="px-2">
                  <div
                    onClick={() => handleCategoryClick(item.category)}
                    className="block group cursor-pointer"
                  >
                    <div className="w-full aspect-square border transition-all duration-300 rounded-sm flex flex-col justify-center items-center gap-4 bg-transparent border-gray-300 text-black hover:bg-Secondary2_color hover:border-Secondary2_color hover:text-white">
                      <span className="text-4xl md:text-5xl transition-transform duration-300 group-hover:scale-110">
                        {item.icon}
                      </span>
                      <h3 className="font-poppins text-xs md:text-base font-medium">
                        {item.name}
                      </h3>
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

export default BrowseCategroy;
