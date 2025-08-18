import React, { useEffect, useState } from "react";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";
import ProductMainImage from "../assets/ProductDetails/GamingJoysitck.png";
import ProductImage1 from "../assets/ProductDetails/ProductDetails1.png";
import ProductImage2 from "../assets/ProductDetails/ProductDetails2.png";
import ProductImage3 from "../assets/ProductDetails/ProductDetails3.png";
import ProductImage4 from "../assets/ProductDetails/ProductDetails4.png";
import { useGetSingleProductQuery } from "../Features/AllSlice/Api/ProductApi";
const ProductDetails = () => {

/**
title :  Data fetching
*@desc:  data fetch from api
*/

    const { data, error, isLoading } = useGetSingleProductQuery(parseInt(1));
    console.log(data?.images);
    
    
const [image, setimage]= useState(null)

    useEffect(() => {
        if (data?.images) {
            setimage(data.images)
        }
    },[data])
    
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
        <div className="w-[60%] flex items-center gap-[30px]  ">
          {/* left side images */}
          <div className="flex flex-col justify-content gap-[16px] ">
            {ProductimageHoloder?.map((item) => (
              <div className="px-[25px] py-[12px] bg-secondary_color rounded-[4px] cursor-pointer">
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
        <div className="w-[35%] bg-green-600">sfgs</div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
