import React from "react";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import Star from "./Star";

const ProductComponent = ({
  itemName,
  itemPicture,
  itemDiscount,
  itemPrice,
  itemPrevpRICE,
  itemRating,
  IsDiscount,
  isAddcrat,
}) => {
  return (
    <div>
      <div className="mb-[20px]">
        <div className="w-[250px] h-[250px] bg-secondary_color flex justify-center items-center relative group cursor-pointer">
          <picture>
            <img src={itemPicture} alt={itemPicture} />
          </picture>
          {/* absolute item will bw here */}
          {IsDiscount && (
            <div className="absolute top-[12px] left-[12px] bg-Secondary2_color inline-block px-[12px] py-[4px] rounded ">
              <span className="font-poppins font-normal text-[12px] text-white">
                {itemDiscount} %
              </span>
            </div>
          )}
          {/* absolute item will bw here */}

          {/* absolute item2 will bw here */}
          <div className="flex flex-col absolute top-[12px] right-[12px] text-[16px] gap-[8px]">
            <span className="bg-white rounded-full p-[10px] cursor-pointer hover:bg-Secondary2_color hover:text-white duration-300">
              <FaRegHeart />
            </span>
            <span className="bg-white rounded-full p-[10px] cursor-pointer hover:bg-Secondary2_color hover:text-white duration-300">
              <FiEye />
            </span>
          </div>
          {/* absolute item2 will bw here */}
          {/* absolute item3 will bw here */}

          {isAddcrat && (
            <div className="absolute bottom-0 cursor-pointer w-full bg-black rounded py-2 transition-all  opacity-0 group-hover:opacity-100 duration-300">
              <h3 className="font-poppins font-medium  text-[16px] text-white text-center">
                Add To Cart
              </h3>
            </div>
          )}
          {/* absolute item3 will bw here */}
        </div>

        <div className="mt-[16px]">
          <h3 className="font-poppins text-[16px] font-medium text-black overflow-hidden text-ellipsis whitespace-nowrap w-[180px]">
            {itemName}
          </h3>

          <div className="flex gap-[12px]">
            <span className="font-poppins text-[16px] font-medium text-Secondary2_color">
              {itemPrice}
            </span>
            <span className="font-poppins text-[16px] font-medium text-black line-through">
              {itemPrevpRICE}
            </span>
          </div>
          <div className="flex gap-[8px] items-center">
            <div className="flex">
              <span>
                <Star rating={itemRating} />
              </span>
            </div>
            <div>
              <span className="text-[14px] text-text2-color">{`(${itemRating})`}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductComponent);
