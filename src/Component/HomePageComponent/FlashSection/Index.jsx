import React, { useEffect, useState } from "react";
import Heading from "../../CommonComponent/Heading";

import ItemComponent from "../../CommonComponent/ItemComponent";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Image1 from "../../../assets/Flash/GamingJoyestick.png";

import Image2 from "../../../assets/Flash/KeyBorad.png";
import Image3 from "../../../assets/Flash/Chair.png";
import Image4 from "../../../assets/Flash/Monitorr.png";
import Slider from "react-slick";
import { useGetProductQuery } from "../../../Features/AllSlice/Api/ProductApi";
import { useSelector, useDispatch } from "react-redux";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const FlashPart = () => {
  
  const { data, error, isLoading } = useGetProductQuery();
  const [productdata, setproductdata] = useState([]);

  

  useEffect(() => {
    if (Array.isArray(data?.products)) {
      setproductdata(data.products);
    } else {
      setproductdata([]); // fallback to empty array
    }
  }, [data]);
  


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
              {productdata.map((item) => (
                <div>
                  <ItemComponent
                    itemName={item.title}
                    itemPicture={item.images[0]}
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
