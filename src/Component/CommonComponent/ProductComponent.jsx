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

const ProductComponent = ({
  product, // Full product object for Redux
  itemName,
  itemPicture,
  itemDiscount,
  itemPrice,
  itemPrevpRICE,
  itemRating,
  IsDiscount,
  isAddcrat,
  onViewClick,
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
    <div className="font-noto-serif w-full group">
      {/* Image Container */}
      <div className="relative aspect-square w-full bg-[#F5F5F5] rounded-sm flex justify-center items-center overflow-hidden cursor-pointer">
        {/* Product Image */}
        <picture className="p-8 md:p-12 block transition-transform duration-500 group-hover:scale-110">
          <img
            src={itemPicture}
            alt={itemName}
            className="w-full h-full object-contain"
          />
        </picture>

        {/* Discount Badge */}
        {IsDiscount && (
          <div className="absolute top-3 left-3 bg-Secondary2_color px-3 py-1 rounded-sm shadow-sm">
            <span className="font-poppins font-normal text-[10px] md:text-[12px] text-white">
              -{Math.round(itemDiscount)}%
            </span>
          </div>
        )}

        {/* Action Icons (Wishlist & View) */}
        <div className="flex flex-col absolute top-3 right-3 gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
          <button
            onClick={handleToggleWishlist}
            className={`bg-white rounded-full p-2 md:p-2.5 shadow-sm hover:bg-Secondary2_color hover:text-white transition-all ${isInWishlist ? "bg-Secondary2_color text-white" : ""}`}
          >
            {isInWishlist ? <FaHeart size={16} /> : <FaRegHeart size={16} />}
          </button>
          <button
            onClick={onViewClick}
            className="bg-white rounded-full p-2 md:p-2.5 shadow-sm hover:bg-Secondary2_color hover:text-white transition-all"
          >
            <FiEye size={16} />
          </button>
        </div>

        {/* Add To Cart Button */}
        {/* Note: On mobile we keep it visible or trigger on tap, on desktop we show on hover */}
        <button
          onClick={handleAddToCart}
          className={`absolute bottom-0 w-full bg-black py-2.5 transition-all duration-300 transform translate-y-full group-hover:translate-y-0 hidden md:block`}
        >
          <h3 className="font-poppins font-medium text-sm text-white text-center">
            Add To Cart
          </h3>
        </button>
      </div>

      {/* Product Details */}
      <div className="mt-4 flex flex-col gap-2">
        <h3 className="font-poppins text-sm md:text-base font-semibold text-black truncate pr-2">
          {itemName}
        </h3>

        <div className="flex items-center gap-3">
          <span className="font-poppins text-sm md:text-base font-medium text-Secondary2_color">
            ${itemPrice}
          </span>
          {itemPrevpRICE && (
            <span className="font-poppins text-sm md:text-base font-medium text-gray-400 line-through">
              ${itemPrevpRICE}
            </span>
          )}
        </div>

        {/* Rating Section */}
        <div className="flex gap-2 items-center">
          <div className="flex text-yellow-400">
            <Star rating={itemRating} />
          </div>
          <span className="text-xs md:text-sm font-semibold text-gray-500">
            ({itemRating})
          </span>
        </div>

        {/* Mobile-only Add to Cart (Visible without hover) */}
        <button
          onClick={handleAddToCart}
          className="md:hidden w-full border border-gray-200 py-2 mt-1 text-xs font-semibold rounded-sm active:bg-black active:text-white transition-colors"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default React.memo(ProductComponent);
