import React from "react";
import Heading from "../../CommonComponent/Heading";
import { useGetProductQuery } from "../../../Features/AllSlice/Api/ProductApi";
import ItemComponent from "../../CommonComponent/ItemComponent";
import Slider from "react-slick";
import SkeletonCard from "../../Skeliton/Skeliton";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { calculateDiscountPrice } from "../../../Utils/Calculation";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ExploreProduct = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductQuery();

  // Navigation Arrows - Fixed for Mobile
  const NextArrow = ({ onClick }) => (
    <div
      className="absolute top-[-50px] md:top-[-60px] right-2 md:right-0 z-10 cursor-pointer bg-[#F5F5F5] hover:bg-Secondary2_color hover:text-white text-black p-2 rounded-full transition-all shadow-sm"
      onClick={onClick}
    >
      <MdOutlineNavigateNext size={24} />
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      className="absolute top-[-50px] md:top-[-60px] right-[50px] md:right-[60px] z-10 cursor-pointer bg-[#F5F5F5] hover:bg-Secondary2_color hover:text-white text-black p-2 rounded-full transition-all shadow-sm"
      onClick={onClick}
    >
      <GrFormPrevious size={24} />
    </div>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    rows: 2, // Keeps the 2-row grid layout
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 3, rows: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2, rows: 2 },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          rows: 2,
          arrows: true,
          swipeToSlide: true,
        },
      },
    ],
  };

  const handleViewAllProduct = () => {
    navigate("/product");
    window.scrollTo(0, 0);
  };

  return (
    <div className="container mx-auto px-4 md:px-0 pt-10 md:pt-[71px] pb-10 md:pb-[140px] font-noto-serif">
      <Heading
        HeadingTitle={"Our Products"}
        SeconderyHeading={"Explore Our Products"}
        showtimer={false}
        isButton={false}
      />

      <div className="mt-8 md:mt-[40px] border-b border-gray-200 pb-12 md:pb-[70px]">
        <div className="relative">
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : (
            <div className="slider-container px-1">
              <Slider {...settings}>
                {data?.products.map((item) => (
                  <div key={item.id} className="p-2">
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
            </div>
          )}

          {/* View All Button */}
          <div className="flex justify-center items-center mt-10 md:mt-[60px]">
            <button
              onClick={handleViewAllProduct}
              className="bg-Secondary2_color hover:bg-opacity-90 active:scale-95 transition-all px-10 md:px-[48px] rounded py-3 md:py-[16px] text-sm md:text-base text-white font-medium font-poppins shadow-md"
            >
              View All Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreProduct;
