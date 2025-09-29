import React, { useEffect, useState } from "react";
import Heading from "../../CommonComponent/Heading";

import ItemComponent from "../../CommonComponent/ItemComponent";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { calculateDiscountPrice } from "../../../Utils/Calculation";
import Slider from "react-slick";
import { useGetProductQuery } from "../../../Features/AllSlice/Api/ProductApi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SkeletonCard from "../../Skeliton/Skeliton";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../CommonComponent/LoadingComponent";

const FlashPart = () => {
  const navigate = useNavigate();
  const { data, error, isLoading } = useGetProductQuery();

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-80px] md:top-[-60px] right-[-10px] md:right-0 z-10 cursor-pointer bg-black text-white p-1.5 md:p-2 rounded-full"
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
        className="absolute top-[-80px] md:top-[-60px] right-[35px] md:right-[60px] z-10 cursor-pointer bg-black text-white p-1.5 md:p-2 rounded-full"
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
    slidesToShow: window.innerWidth < 640 ? 2 : 4,
 
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  
  const handleViewAllProduct = () => {
    navigate("/product");
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
      <div className="mt-[40px] border-b border-gray-400  pb-[70px] pl-[10px] md:pl-0">
        <div className="relative">
          <div className="slider-container ">
            <Slider {...settings}>
              {data?.products.map((item) => (
                <div>
                  {isLoading ? (
                    <LoadingComponent />
                  ) : (
                    <ItemComponent
                      itemName={item.title}
                      itemPicture={item.images[0]}
                      itemDiscount={item.discountPercentage}
                      itemPrice={calculateDiscountPrice(
                        item.price,
                        item.discountPercentage,
                        2
                      )}
                      itemPrevpRICE={item.price}
                      itemRating={item?.rating}
                      IsDiscount={true}
                      isAddcrat={true}
                      onClick={() =>
                        navigate(`/product-details/${item.id}`, {
                          state: { product: item }, 
                        })
                      }
                    />
                  )}
                </div>
              ))}
            </Slider>
          </div>
          <div className="flex justify-center items-center mt-[60px]">
            <button
              onClick={() => handleViewAllProduct()}
              className="bg-Secondary2_color px-[48px] cursor-pointer rounded py-[16px] text-[16px] text-white font-medium font-poppins"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashPart;
