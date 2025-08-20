import React, { useEffect, useState } from "react";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";
import ProductMainImage from "../assets/ProductDetails/GamingJoysitck.png";
import ProductImage1 from "../assets/ProductDetails/ProductDetails1.png";
import ProductImage2 from "../assets/ProductDetails/ProductDetails2.png";
import ProductImage3 from "../assets/ProductDetails/ProductDetails3.png";
import ProductImage4 from "../assets/ProductDetails/ProductDetails4.png";
import { useGetProductQuery, useGetSingleProductQuery } from "../Features/AllSlice/Api/ProductApi";
import Star from "../Component/CommonComponent/Star";
import { calculateDiscountPrice } from "../Utils/Calculation";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";
import Heading from "../Component/CommonComponent/Heading";
// swiper slider
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useProduct } from "../ContextApi/Contextapi";
import ItemComponent from "../Component/CommonComponent/ItemComponent";
// swiper slider
const ProductDetails = () => {
  /**
title :  Data fetching
*@desc:  data fetch from api
*/

  const { data, error, isLoading } = useGetSingleProductQuery(parseInt(1));

  const [image, setimage] = useState(null);

  const { products } = useProduct();
  console.log(products);
  
  useEffect(() => {
    if (data?.images) {
      setimage(data.images);
    }
  }, [data]);
  

  /**
   *@desc: image holder Array
   */

  const ProductimageHoloder = [
    {
      id: 1,
      image: ProductImage1,
    },
    {
      id: 2,
      image: ProductImage2,
    },
    {
      id: 3,
      image: ProductImage3,
    },
    {
      id: 4,
      image: ProductImage4,
    },
  ];

  const sizeOfProduct = [
    {
      id: 1,
      size: "XS",
      CSS: "px-[7px] py-[6px]",
    },
    {
      id: 2,
      size: "S",
      CSS: "px-[12px] py-[6px]",
    },
    {
      id: 3,
      size: "M",
      CSS: "px-[10px] py-[6px]",
    },
    {
      id: 4,
      size: "L",
      CSS: "px-[13px] py-[6px]",
    },
    {
      id: 5,
      size: "Xl",
      CSS: "px-[8px] py-[6px]",
    },
  ];

  const [count, setCount] = useState(2);
  return (
    <div className="container">
      <div className="mt-4">
        <BreadCrumb />
      </div>

      <div className="flex flex-row justify-between py-10">
        <div className="w-[55%] flex items-center gap-[30px] justify-between ">
          {/* left side images */}
          <div className="flex flex-col justify-content gap-[24px] ">
            {ProductimageHoloder?.map((item) => (
              <div
                className="px-[25px] py-[12px] bg-secondary_color hover:bg-gray-200 transition-all duration-300 rounded-[4px] cursor-pointer"
                key={item.id}
              >
                <img
                  src={item.image}
                  alt={item.image}
                  className="w-[121px] h-[114px]"
                  onClick={() => setimage(item.image)}
                />
              </div>
            ))}
          </div>
          {/* left side images */}
          {/* rightside big image */}
          <div className="pt-[154px] pb-[131px] px-[27px] bg-secondary_color rounded-[4px] group overflow-hidden cursor-pointer">
            <img
              src={image}
              alt={image}
              className="w-[416px] h-[343px] transition-transform duration-500 ease-in-out group-hover:scale-110"
            />
          </div>

          {/* rightside big image */}
        </div>
        {/* product details */}
        <div className="w-[40%]">
          <div className="flex flex-col gap-y-6">
            <div className="flex flex-col gap-4 pb-6 border-b border-text2-color">
              <h3 className="font-semibold text-2xl text-text2-color">
                {data?.title}
              </h3>
              <div className="flex flex-row items-center gap-2.5">
                <Star rating={data?.rating} />
                <span className="text-gray-600 text-[14px] font-poppins font-normal">
                  ({data?.reviews?.length}Reviews)
                </span>
                <div className="h-[14px] border border-gray-600"></div>
                <div
                  className={`${
                    data?.stock > 0 ? "text-Button1_color" : "text-red-500"
                  }  text-[14px] font-normal font-poppins`}
                >
                  {data?.stock > 0 ? "In Stock" : "Out Of Stock"}
                </div>
              </div>
              <p className="font-normal text-2xl text-text2-color">
                $
                {calculateDiscountPrice(
                  data?.price,
                  data?.discountPercentage,
                  2
                )}
              </p>
              <p className="mt-2">{data?.description}</p>
            </div>
            {/*  color and size  */}

            <div className="flex flex-col gap-y-6">
              {/* color */}
              <div className="flex flex-row gap-x-6 items-center ">
                <h3 className="font-inter font-normal text-xl text-black">
                  Colors:
                </h3>
                <div className="flex gap-2.5 flex-row items-center cursor-pointer">
                  {/* color 1 */}
                  <div className="border-3 rounded-full">
                    <div className="w-[24px] h-[24px] bg-HoverButton2_color rounded-full border-white border-4"></div>
                  </div>
                  {/* color 1 */}
                  {/* color 2 */}
                  <div className="rounded-full cursor-pointer">
                    <div className="w-[24px] h-[24px] bg-red-400 rounded-full "></div>
                  </div>
                  {/* color 2 */}
                </div>
              </div>
              {/* color */}
              {/* size */}
              <div className=" flex flex-row gap-x-6 items-center">
                <h3 className="font-normal font-inter text-xl text-black">
                  Size:
                </h3>
                <div className="flex flex-row items-center gap-4">
                  {sizeOfProduct.map((item) => (
                    <h3
                      className={`font-medium ${item.CSS} font-poppins text-[14px] hover:bg-gray-300 transition-all duration-300 cursor-pointer text-black  border border-black border-opacity-50 rounded`}
                    >
                      {item.size}
                    </h3>
                  ))}
                </div>
              </div>
              {/* size */}
              {/* quantity */}
              <div className="flex flex-row gap-4 items-center">
                <div className="flex items-center border rounded ">
                  {/* Minus Button */}
                  <button
                    onClick={() => setCount(count > 0 ? count - 1 : 0)}
                    className="text-2xl px-3 py-3 border-r font-bold rounded-l-lg  hover:bg-gray-200 cursor-pointer"
                  >
                    <FiMinus />
                  </button>

                  {/* Count Display */}
                  <div className="text-center px-[34px] py-2 text-[20px] font-medium font-poppins">
                    {count}
                  </div>

                  {/* Plus Button */}
                  <button
                    onClick={() => setCount(count + 1)}
                    className="text-2xl px-3 py-3 border-l font-bold rounded-r-lg hover:bg-gray-200 cursor-pointer"
                  >
                    <FiPlus />
                  </button>
                </div>
                <div>
                  <button
                    className="font-medium font-poppins text-[16px] text-gray-50 px-12 py-3 rounded transition-all duration-300 bg-red-500 hover:bg-red-400
                   cursor-pointer"
                  >
                    Buy Now
                  </button>
                </div>
                <button className="px-3.5 py-3.5 rounded border text-[17px] cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300">
                  <FaRegHeart />
                </button>
              </div>
              {/* quantity */}
            </div>
            {/*  color and size  */}

            {/* description  */}

            <div className="flex flex-col border rounded w-[420px] ">
              <div className="  py-[20px] px-[16px] border-b cursor-pointer hover:bg-gray-100  ">
                <div className="flex flex-row gap-4 transition-transform duration-500 ease-in-out hover:scale-103">
                  <span className="text-[45px]">
                    <TbTruckDelivery />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold font-poppins text-[16px] text-black">
                      Free Delivery
                    </h3>
                    <h3 className="font-semibold font-poppins text-[12px] text-black">
                      Enter your postal code for Delivery Availability
                    </h3>
                  </div>
                </div>
              </div>
              <div className="  py-[20px] px-[16px] cursor-pointer hover:bg-gray-100 transition-all duration-300">
                <div className="flex flex-row gap-4 transition-transform duration-500 ease-in-out hover:scale-103">
                  <span className="text-[45px]">
                    <BsArrowRepeat />
                  </span>
                  <div className="flex flex-col gap-2">
                    <h3 className="font-semibold font-poppins text-[16px] text-black">
                      Return Delivery
                    </h3>
                    <h3 className="font-semibold font-poppins text-[12px] text-black">
                      Free 30 Days Delivery Returns. Details
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            {/* description  */}
          </div>
        </div>
        {/* product details */}
      </div>
      <div className="py-[140px]">
        <Heading
          HeadingTitle={"Related Item"}
          SeconderyHeading={false}
          showtimer={false}
          isButton={false}
          isSeccendorytitle={false}
        />
        <div>
          <Swiper
            // install Swiper modules
            modules={[A11y]}
            spaceBetween={50}
            slidesPerView={4}
          >
            {products?.products.map((item) => (
              <div>
                <SwiperSlide>
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
                    itemRating={item.rating}
                    IsDiscount={true}
                    isAddcrat={true}
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
