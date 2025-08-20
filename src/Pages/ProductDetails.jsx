import React, { useEffect, useState } from "react";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";
import ProductMainImage from "../assets/ProductDetails/GamingJoysitck.png";
import ProductImage1 from "../assets/ProductDetails/ProductDetails1.png";
import ProductImage2 from "../assets/ProductDetails/ProductDetails2.png";
import ProductImage3 from "../assets/ProductDetails/ProductDetails3.png";
import ProductImage4 from "../assets/ProductDetails/ProductDetails4.png";
import { useGetSingleProductQuery } from "../Features/AllSlice/Api/ProductApi";
import Star from "../Component/CommonComponent/Star";
import { calculateDiscountPrice } from "../Utils/Calculation";
const ProductDetails = () => {
  /**
title :  Data fetching
*@desc:  data fetch from api
*/

  const { data, error, isLoading } = useGetSingleProductQuery(parseInt(1));

  const [image, setimage] = useState(null);
  console.log(data);

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
  return (
    <div className="container">
      <div className="mt-4">
        <BreadCrumb />
      </div>

      <div className="flex flex-row justify-between py-10">
        <div className="w-[55%] flex items-center gap-[30px] justify-between ">
          {/* left side images */}
          <div className="flex flex-col justify-content gap-[16px] ">
            {ProductimageHoloder?.map((item) => (
              <div
                className="px-[25px] py-[12px] bg-secondary_color rounded-[4px] cursor-pointer"
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
              className="w-[416px] h-[315px] transition-transform duration-500 ease-in-out group-hover:scale-110"
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
                  <h3 className="font-medium font-poppins text-[14px] text-black px-[7px] py-[6px] border border-black border-opacity-50 rounded">
                    XS
                  </h3>
                  <h3 className="font-medium font-poppins text-[14px] text-black px-[12px] py-[6px] border border-black border-opacity-50 rounded">
                    S
                  </h3>
                  <h3 className="font-medium font-poppins text-[14px] text-black px-[10px] py-[6px] border border-black border-opacity-50 rounded">
                    M
                  </h3>
                  <h3 className="font-medium font-poppins text-[14px] text-black px-[13px] py-[6px] border border-black border-opacity-50 rounded">
                    L
                  </h3>
                  <h3 className="font-medium font-poppins text-[14px] text-black px-[8px] py-[6px] border border-black border-opacity-50 rounded">
                    XL
                  </h3>
                </div>
              </div>
              {/* size */}
              {/* quantity */}
              <div className="flex flex-row">
                
              </div>
              {/* quantity */}
            </div>
            {/*  color and size  */}
          </div>
        </div>
        {/* product details */}
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
