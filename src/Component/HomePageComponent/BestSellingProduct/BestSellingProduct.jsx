import React from "react";
import Heading from "../../../Component/CommonComponent/Heading";
import Shirt from "../../../assets/Bestselling/Shirt.png";
import Soundbox from "../../../assets/Bestselling/SoundBox.png";
import table from "../../../assets/Bestselling/table.png";
import Bag from "../../../assets/Bestselling/Bag.png";

import ItemComponent from "../../CommonComponent/ItemComponent";
import { useGetProductQuery } from "../../../Features/AllSlice/Api/ProductApi";
import { calculateDiscountPrice } from "../../../Utils/Calculation";
import Slider from "react-slick";
import SkeletonCard from "../../Skeliton/Skeliton";
import { GrFormPrevious } from "react-icons/gr";
import { MdOutlineNavigateNext } from "react-icons/md";
const BestSellingProduct = () => {
 
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

   const { data, error, isLoading } = useGetProductQuery();
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
              {data?.products.map((item) => (
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
                    />
                  )}
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

export default BestSellingProduct;
