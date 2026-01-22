import React from "react";
import Heading from "../../CommonComponent/Heading";
import ItemComponent from "../../CommonComponent/ItemComponent";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { calculateDiscountPrice } from "../../../Utils/Calculation";
import Slider from "react-slick";
import { useGetProductQuery } from "../../../Features/AllSlice/Api/ProductApi";
import { useNavigate } from "react-router-dom";
import LoadingComponent from "../../CommonComponent/LoadingComponent";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const FlashPart = () => {
  const navigate = useNavigate();
  const { data, isLoading } = useGetProductQuery();

  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-50px] md:top-[-60px] right-2 md:right-0 z-10 cursor-pointer bg-[#F5F5F5] hover:bg-Secondary2_color hover:text-white text-black p-2 rounded-full transition-all duration-300 shadow-sm"
        onClick={onClick}
      >
        <MdOutlineNavigateNext size={20} className="md:w-6 md:h-6" />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div
        className="absolute top-[-50px] md:top-[-60px] right-[45px] md:right-[60px] z-10 cursor-pointer bg-[#F5F5F5] hover:bg-Secondary2_color hover:text-white text-black p-2 rounded-full transition-all duration-300 shadow-sm"
        onClick={onClick}
      >
        <GrFormPrevious size={20} className="md:w-6 md:h-6" />
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
          arrows: true, // Keep arrows visible but adjusted
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          gap: 10,
        },
      },
    ],
  };

  const handleViewAllProduct = () => {
    navigate("/product");
  };

  return (
    <div className="container mx-auto px-4 md:px-0 font-noto-serif">
      {/* Header Section */}
      <div className="mt-20 md:mt-[140px] animate-fadeInUp">
        <Heading
          HeadingTitle={"Today's"}
          SeconderyHeading={"Flash Sales"}
          showtimer={true}
          isButton={false}
        />
      </div>

      {/* Slider Section */}
      <div className="mt-8 md:mt-[40px] border-b border-gray-200 pb-12 md:pb-[70px]">
        <div className="relative">
          {isLoading ? (
            <div className="flex gap-4">
              {/* Show multiple loaders while loading */}
              {[1, 2, 3, 4].map((i) => (
                <LoadingComponent key={i} />
              ))}
            </div>
          ) : (
            <div className="slider-container px-1 md:px-0">
              <Slider {...settings}>
                {data?.products.map((item) => (
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
            </div>
          )}

          {/* View All Button */}
          <div className="flex justify-center items-center mt-10 md:mt-[60px]">
            <button
              onClick={handleViewAllProduct}
              className="bg-Secondary2_color hover:bg-opacity-90 active:scale-95 transition-all px-10 md:px-[48px] rounded py-3 md:py-[16px] text-sm md:text-[16px] text-white font-medium font-poppins shadow-md cursor-pointer"
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
