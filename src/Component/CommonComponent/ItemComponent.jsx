import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { FiEye } from "react-icons/fi";
import Star from "./Star";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../Features/AllSlice/cartSlice";
import {
  toggleWishlist,
  selectWishlistItems,
} from "../../Features/AllSlice/wishlistSlice";

const ItemComponent = ({
  product, // Full product object for Redux
  itemName,
  itemPicture,
  itemDiscount,
  itemPrice,
  itemPrevpRICE,
  itemRating,
  IsDiscount,
  isAddcrat,
  onClick,
}) => {
  const dispatch = useDispatch();
  const wishlistItems = useSelector(selectWishlistItems);
  const isInWishlist = product
    ? wishlistItems.some((item) => item.id === product.id)
    : false;

  const handleAddToCart = (e) => {
    e.stopPropagation();
    if (product) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  const handleToggleWishlist = (e) => {
    e.stopPropagation();
    if (product) {
      dispatch(toggleWishlist(product));
    }
  };

  return (
    <div
      onClick={onClick}
      className="cursor-pointer font-noto-serif active:scale-[0.98] transition-transform"
    >
      <div className="mb-[15px] md:mb-[20px]">
        {/* Responsive Container */}
        <div className="w-full aspect-square md:w-[270px] md:h-[270px] bg-secondary_color flex justify-center items-center relative group rounded-sm">
          <picture className="p-4">
            <img
              src={itemPicture}
              alt={itemName}
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </picture>

          {/* Discount Badge - Slightly smaller for mobile */}
          {itemDiscount && (
            <div className="absolute top-[8px] left-[8px] md:top-[12px] md:left-[12px] bg-Secondary2_color inline-block px-[8px] md:px-[12px] py-[2px] md:py-[4px] rounded">
              <span className="font-poppins font-normal text-[10px] md:text-[12px] text-white">
                -{Math.round(itemDiscount)}%
              </span>
            </div>
          )}

          {/* Action Buttons - Optimized for touch (larger hit area) */}
          <div className="flex flex-col absolute top-[8px] right-[8px] md:top-[12px] md:right-[12px] text-[14px] md:text-[16px] gap-[8px]">
            <span
              onClick={handleToggleWishlist}
              className={`bg-white rounded-full p-[8px] md:p-[10px] shadow-sm active:bg-Secondary2_color active:text-white md:hover:bg-Secondary2_color md:hover:text-white transition-all ${isInWishlist ? "bg-Secondary2_color text-white" : ""}`}
            >
              {isInWishlist ? <FaHeart /> : <FaRegHeart />}
            </span>
            <span className="bg-white rounded-full p-[8px] md:p-[10px] shadow-sm active:bg-Secondary2_color active:text-white md:hover:bg-Secondary2_color md:hover:text-white transition-all">
              <FiEye />
            </span>
          </div>

          {/* Add To Cart - Modified for Mobile Visibility */}
          {isAddcrat && (
            <div
              onClick={handleAddToCart}
              className="absolute bottom-0 w-full bg-black py-2 transition-all 
                            opacity-100 lg:opacity-0 lg:group-hover:opacity-100"
            >
              <h3 className="font-poppins font-medium text-[12px] md:text-[16px] text-white text-center">
                Add To Cart
              </h3>
            </div>
          )}
        </div>

        {/* Content Section */}
        <div className="mt-[12px] md:mt-[16px] flex flex-col gap-1">
          <h3 className="font-poppins text-[14px] md:text-[16px] font-medium text-black overflow-hidden text-ellipsis whitespace-nowrap w-full">
            {itemName}
          </h3>

          <div className="flex gap-[8px] md:gap-[12px] items-center">
            <span className="font-poppins text-[14px] md:text-[16px] font-medium text-Secondary2_color">
              ${itemPrice}
            </span>
            {itemPrevpRICE && (
              <span className="font-poppins text-[12px] md:text-[16px] font-medium text-gray-400 line-through">
                ${itemPrevpRICE}
              </span>
            )}
          </div>

          <div className="flex gap-[6px] md:gap-[8px] items-center mt-1">
            <div className="flex scale-90 md:scale-100 origin-left">
              <Star rating={itemRating} />
            </div>
            <span className="text-[12px] md:text-[14px] text-text2-color">
              ({itemRating})
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemComponent;
