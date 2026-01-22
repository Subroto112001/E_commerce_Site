import React from "react";
import Heading from "../../../Component/CommonComponent/Heading";
import ItemComponent from "../../CommonComponent/ItemComponent";
import { calculateDiscountPrice } from "../../../Utils/Calculation";
import Slider from "react-slick";
import SkeletonCard from "../../Skeliton/Skeliton";
import { useNavigate } from "react-router-dom";
import { useCategoryByProduct } from "../../../ContextApi/CategoryProduct";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const BestSellingProduct = () => {
  const navigate = useNavigate();
  const { details, isLoading } = useCategoryByProduct("smartphones");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto px-4 md:px-0 font-noto-serif">
      {/* Header Section */}
      <div className="pt-10 md:pt-[70px] animate-fadeInUp">
        <Heading
          HeadingTitle={"This Month"}
          SeconderyHeading={"Best Selling Products"}
          showtimer={false}
          isButton={true}
        />
      </div>

      {/* Product Slider Section */}
      <div className="mt-8 md:mt-[40px] border-b border-gray-200 pb-12 md:pb-[70px]">
        <div className="relative">
          <div className="slider-container">
            {isLoading ? (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <SkeletonCard key={i} />
                ))}
              </div>
            ) : (
              <Slider {...settings}>
                {details?.products.map((item) => (
                  <div key={item.id} className="px-2 md:px-3">
                    <ItemComponent
                      product={item}
                      itemName={item.title}
                      itemPicture={item.thumbnail || item.images[0]}
                      itemDiscount={item.discountPercentage}
                      itemPrice={calculateDiscountPrice(
                        item.price,
                        item.discountPercentage,
                        2,
                      )}
                      itemPrevpRICE={item.price}
                      itemRating={item?.rating}
                      IsDiscount={item.discountPercentage > 0}
                      isAddcrat={true}
                      onClick={() =>
                        navigate(`/product-details/${item.id}`, {
                          state: { product: item },
                        })
                      }
                    />
                  </div>
                ))}
              </Slider>
            )}
          </div>

          {/* Mobile-Optimized View All Button */}
          <div className="flex justify-center items-center mt-10 md:mt-[60px]">
            <button
              className="bg-Secondary2_color hover:bg-opacity-90 active:scale-95 transition-all px-10 md:px-[48px] rounded py-3 md:py-[16px] text-sm md:text-[16px] text-white font-medium font-poppins shadow-md"
              onClick={() =>
                navigate(`/product`, {
                  state: { product: details?.products },
                })
              }
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellingProduct;
