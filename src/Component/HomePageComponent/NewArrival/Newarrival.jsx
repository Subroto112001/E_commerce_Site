import React from "react";
import Heading from "../../CommonComponent/Heading";
import { useNavigate } from "react-router-dom";
import { useGetProductQuery } from "../../../Features/AllSlice/Api/ProductApi";

const Newarrival = () => {
  const navigate = useNavigate();
  const { data: productsData, isLoading } = useGetProductQuery();

  // Get featured products for different categories
  const products = productsData?.products || [];

  // Get specific category products for featured display
  const smartphoneProduct = products.find((p) => p.category === "smartphones");
  const fashionProduct = products.find(
    (p) => p.category === "womens-dresses" || p.category === "tops",
  );
  const audioProduct = products.find((p) => p.category === "laptops"); // Using laptop as audio stand-in
  const fragranceProduct = products.find((p) => p.category === "fragrances");

  const handleShopNow = (product) => {
    if (product) {
      navigate(`/product-details/${product.id}`, { state: { product } });
    } else {
      navigate("/product");
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 md:px-0 font-noto-serif">
        <div className="pt-16 md:pt-[140px]">
          <Heading
            HeadingTitle={"Featured"}
            SeconderyHeading={"New Arrival"}
            showtimer={false}
            isButton={false}
          />
        </div>
        <div className="mt-8 md:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[30px]">
          <div className="md:col-span-2 lg:row-span-2 bg-gray-800 h-[400px] animate-pulse rounded-sm"></div>
          <div className="md:col-span-2 bg-gray-800 h-[200px] animate-pulse rounded-sm"></div>
          <div className="bg-gray-800 h-[200px] animate-pulse rounded-sm"></div>
          <div className="bg-gray-800 h-[200px] animate-pulse rounded-sm"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 md:px-0 font-noto-serif">
      <div className="pt-16 md:pt-[140px]">
        <Heading
          HeadingTitle={"Featured"}
          SeconderyHeading={"New Arrival"}
          showtimer={false}
          isButton={false}
        />
      </div>

      {/* Grid Container */}
      <div className="mt-8 md:mt-[60px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-[30px]">
        {/* Featured Product 1 - Large Feature (Full height on desktop) */}
        {smartphoneProduct && (
          <div className="md:col-span-2 lg:row-span-2 bg-black relative group overflow-hidden rounded-sm flex items-end justify-center pt-10 md:pt-20 min-h-[400px]">
            <picture className="w-full h-full flex justify-center items-end">
              <img
                src={smartphoneProduct.thumbnail}
                alt={smartphoneProduct.title}
                className="object-contain max-h-[300px] md:max-h-[400px] transition-transform duration-500 group-hover:scale-105"
              />
            </picture>
            <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 z-10">
              <span className="text-xs px-2 py-1 bg-Secondary2_color text-white rounded mb-2 inline-block">
                {Math.round(smartphoneProduct.discountPercentage)}% OFF
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {smartphoneProduct.title}
              </h2>
              <p className="text-sm text-gray-300 max-w-[240px] mb-3 line-clamp-2">
                {smartphoneProduct.description}
              </p>
              <button
                onClick={() => handleShopNow(smartphoneProduct)}
                className="text-white font-medium border-b border-gray-500 hover:border-white transition-colors cursor-pointer"
              >
                Shop Now
              </button>
            </div>
          </div>
        )}

        {/* Featured Product 2 - Wide Feature */}
        {fashionProduct && (
          <div className="md:col-span-2 bg-[#0D0D0D] relative group overflow-hidden rounded-sm flex items-center justify-end min-h-[250px]">
            <picture className="w-full h-full flex justify-end">
              <img
                src={fashionProduct.thumbnail}
                alt={fashionProduct.title}
                className="object-contain h-full max-h-[200px] transition-transform duration-500 group-hover:scale-105"
              />
            </picture>
            <div className="absolute left-4 bottom-4 md:left-8 md:bottom-8 z-10">
              <span className="text-xs px-2 py-1 bg-Secondary2_color text-white rounded mb-2 inline-block capitalize">
                {fashionProduct.category?.replace("-", " ")}
              </span>
              <h2 className="text-xl md:text-2xl font-semibold text-white mb-2">
                {fashionProduct.title}
              </h2>
              <p className="text-sm text-gray-300 max-w-[240px] mb-3 line-clamp-2">
                {fashionProduct.description}
              </p>
              <button
                onClick={() => handleShopNow(fashionProduct)}
                className="text-white font-medium border-b border-gray-500 hover:border-white transition-colors cursor-pointer"
              >
                Shop Now
              </button>
            </div>
          </div>
        )}

        {/* Featured Product 3 - Small Feature */}
        {audioProduct && (
          <div className="bg-black relative group overflow-hidden rounded-sm p-8 flex items-center justify-center min-h-[220px]">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full"></div>
            <picture className="relative z-10">
              <img
                src={audioProduct.thumbnail}
                alt={audioProduct.title}
                className="object-contain h-32 md:h-auto max-h-[150px] transition-transform duration-500 group-hover:scale-110"
              />
            </picture>
            <div className="absolute left-4 bottom-4 z-10">
              <h2 className="text-lg font-semibold text-white line-clamp-1">
                {audioProduct.title}
              </h2>
              <p className="text-xs text-gray-300 mb-2 line-clamp-1">
                ${audioProduct.price} -{" "}
                {Math.round(audioProduct.discountPercentage)}% off
              </p>
              <button
                onClick={() => handleShopNow(audioProduct)}
                className="text-sm text-white border-b border-gray-500 cursor-pointer hover:border-white transition-colors"
              >
                Shop Now
              </button>
            </div>
          </div>
        )}

        {/* Featured Product 4 - Small Feature */}
        {fragranceProduct && (
          <div className="bg-black relative group overflow-hidden rounded-sm p-8 flex items-center justify-center min-h-[220px]">
            <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full"></div>
            <picture className="relative z-10">
              <img
                src={fragranceProduct.thumbnail}
                alt={fragranceProduct.title}
                className="object-contain h-32 md:h-auto max-h-[150px] transition-transform duration-500 group-hover:scale-110"
              />
            </picture>
            <div className="absolute left-4 bottom-4 z-10">
              <h2 className="text-lg font-semibold text-white line-clamp-1">
                {fragranceProduct.title}
              </h2>
              <p className="text-xs text-gray-300 mb-2 line-clamp-1">
                {fragranceProduct.brand ||
                  fragranceProduct.category?.replace("-", " ")}
              </p>
              <button
                onClick={() => handleShopNow(fragranceProduct)}
                className="text-sm text-white border-b border-gray-500 cursor-pointer hover:border-white transition-colors"
              >
                Shop Now
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Newarrival;
