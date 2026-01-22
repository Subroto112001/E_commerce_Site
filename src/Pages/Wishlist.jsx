import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  selectWishlistItems,
  removeFromWishlist,
  clearWishlist,
} from "../Features/AllSlice/wishlistSlice";
import { addToCart } from "../Features/AllSlice/cartSlice";
import { useGetProductQuery } from "../Features/AllSlice/Api/ProductApi";
import { calculateDiscountPrice } from "../Utils/Calculation";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";

import { Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import ProductComponent from "../Component/CommonComponent/ProductComponent";

const Wishlist = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlistItems = useSelector(selectWishlistItems);
  const { data: productsData } = useGetProductQuery();

  // Get "Just For You" products (random products from API)
  const justForYouProducts = productsData?.products?.slice(0, 8) || [];

  const handleMoveAllToBag = () => {
    wishlistItems.forEach((item) => {
      dispatch(addToCart({ ...item, quantity: 1 }));
    });
    dispatch(clearWishlist());
  };

  const handleAddToCart = (item) => {
    dispatch(addToCart({ ...item, quantity: 1 }));
    dispatch(removeFromWishlist(item.id));
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeFromWishlist(id));
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mt-[40px] md:mt-[95px]">
        <div className="mt-[30px]">
          <BreadCrumb />
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-6">
            <h2 className="font-poppins font-medium text-[18px] md:text-[20px] text-black">
              Wishlist ({wishlistItems.length})
            </h2>
            {wishlistItems.length > 0 && (
              <button
                onClick={handleMoveAllToBag}
                className="font-poppins font-medium text-[14px] md:text-[16px] text-black py-3 px-8 md:py-4 md:px-12 border rounded hover:bg-Secondary2_color hover:text-white hover:border-Secondary2_color transition-all"
              >
                Move All To Bag
              </button>
            )}
          </div>
        </div>

        {/* Wishlist Items */}
        {wishlistItems.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20">
            <h2 className="text-xl md:text-2xl font-semibold font-poppins mb-4">
              Your wishlist is empty
            </h2>
            <p className="text-gray-500 mb-8 text-center">
              Save items you love by clicking the heart icon on products.
            </p>
            <button
              onClick={() => navigate("/product")}
              className="px-8 py-3 bg-Secondary2_color text-white font-poppins font-medium rounded hover:bg-opacity-90 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <div className="w-full mt-[40px] md:mt-[60px]">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="relative group">
                  <div className="font-noto-serif w-full">
                    {/* Image Container */}
                    <div className="relative aspect-square w-full bg-[#F5F5F5] rounded-sm flex justify-center items-center overflow-hidden cursor-pointer">
                      <picture className="p-6 md:p-12 block transition-transform duration-500 group-hover:scale-110">
                        <img
                          src={item.thumbnail || item.images?.[0]}
                          alt={item.title}
                          className="w-full h-full object-contain"
                          onClick={() =>
                            navigate(`/product-details/${item.id}`, {
                              state: { product: item },
                            })
                          }
                        />
                      </picture>

                      {/* Discount Badge */}
                      {item.discountPercentage > 0 && (
                        <div className="absolute top-3 left-3 bg-Secondary2_color px-3 py-1 rounded-sm shadow-sm">
                          <span className="font-poppins font-normal text-[10px] md:text-[12px] text-white">
                            -{Math.round(item.discountPercentage)}%
                          </span>
                        </div>
                      )}

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveFromWishlist(item.id)}
                        className="absolute top-3 right-3 bg-white rounded-full p-2 shadow-sm hover:bg-red-500 hover:text-white transition-all"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                      </button>

                      {/* Add To Cart Button */}
                      <button
                        onClick={() => handleAddToCart(item)}
                        className="absolute bottom-0 w-full bg-black py-2.5 transition-all duration-300 transform translate-y-full group-hover:translate-y-0"
                      >
                        <h3 className="font-poppins font-medium text-sm text-white text-center">
                          Add To Cart
                        </h3>
                      </button>
                    </div>

                    {/* Product Details */}
                    <div className="mt-4 flex flex-col gap-2">
                      <h3 className="font-poppins text-sm md:text-base font-semibold text-black truncate">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="font-poppins text-sm md:text-base font-medium text-Secondary2_color">
                          $
                          {calculateDiscountPrice(
                            item.price,
                            item.discountPercentage || 0,
                            2,
                          )}
                        </span>
                        {item.discountPercentage > 0 && (
                          <span className="font-poppins text-sm md:text-base font-medium text-gray-400 line-through">
                            ${item.price}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Just For You Section */}
        <div className="mt-[60px] md:mt-[80px] mb-10">
          <div className="flex justify-between items-center">
            <div className="flex gap-[16px] flex-row items-center">
              <div className="w-[20px] h-[40px] bg-Secondary2_color rounded"></div>
              <h3 className="font-normal font-poppins text-[18px] md:text-[20px] text-black">
                Just For You
              </h3>
            </div>
            <button
              onClick={() => navigate("/product")}
              className="text-[14px] md:text-[16px] font-medium font-poppins text-black py-[12px] px-[24px] md:py-[16px] md:px-[48px] rounded border bg-white cursor-pointer hover:bg-Secondary2_color hover:text-white hover:border-Secondary2_color transition-all"
            >
              See All
            </button>
          </div>

          <div className="w-full mt-[40px] md:mt-[60px]">
            <Swiper
              modules={[Pagination, Scrollbar, A11y]}
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              loop={justForYouProducts.length > 4}
            >
              {justForYouProducts.map((item) => (
                <SwiperSlide key={item.id} className="!flex justify-center">
                  <div
                    className="flex justify-center cursor-pointer w-full"
                    onClick={() =>
                      navigate(`/product-details/${item.id}`, {
                        state: { product: item },
                      })
                    }
                  >
                    <ProductComponent
                      product={item}
                      itemName={item.title}
                      itemPicture={item.thumbnail}
                      itemDiscount={item.discountPercentage}
                      itemPrice={calculateDiscountPrice(
                        item.price,
                        item.discountPercentage,
                        2,
                      )}
                      itemPrevpRICE={item.price}
                      itemRating={item.rating}
                      IsDiscount={item.discountPercentage > 0}
                      isAddcrat={true}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(Wishlist);
