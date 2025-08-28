import React from "react";
import Heading from "../../../Component/CommonComponent/Heading";
import Shirt from "../../../assets/Bestselling/Shirt.png";
import Soundbox from "../../../assets/Bestselling/SoundBox.png";
import table from "../../../assets/Bestselling/table.png";
import Bag from "../../../assets/Bestselling/Bag.png";

import ItemComponent from "../../CommonComponent/ItemComponent";
import { useBestSellingProductQuery, useGetProductByCategoryQuery } from "../../../Features/AllSlice/Api/ProductApi";
import { calculateDiscountPrice } from "../../../Utils/Calculation";
import Slider from "react-slick";
import SkeletonCard from "../../Skeliton/Skeliton";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { useCategoryByProduct } from "../../../ContextApi/CategoryProduct";
const BestSellingProduct = () => {
  const navigate = useNavigate();
   
   const settings = {
     dots: false,
     infinite: true,
     speed: 500,
     slidesToShow: 4,
     slidesToScroll: 1,
     arrows: false,
    
   };
 const { details, error, isLoading } = useCategoryByProduct("smartphones");
  
  
 ;
  
  
  
  return (
    <div className="container">
      <div className="pt-[70px]">
        <Heading
          HeadingTitle={"This Month"}
          SeconderyHeading={"Best Selling Products"}
          showtimer={false}
          isButton={true}
        />
      </div>

      <div className="mt-[40px] border-b border-gray-400  pb-[70px]">
        <div className="relative">
          <div className="slider-container ">
            <Slider {...settings}>
              {details?.products.map((item) => (
                <div>
                  {isLoading ? (
                    <SkeletonCard />
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
              className="bg-Secondary2_color px-[48px] cursor-pointer rounded py-[16px] text-[16px] text-white font-medium font-poppins"
              onClick={() =>
                navigate(`/product`, {
                  state: { product: data?.products },
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
