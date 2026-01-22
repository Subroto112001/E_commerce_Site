import React, { useState } from "react";
import { FaApple, FaChevronRight } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { HiMenuAlt2 } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { useDispatch } from "react-redux";
import { setCategory } from "../../../Features/AllSlice/filterSlice";
import {
  useGetProductQuery,
  useProductCategoryListQuery,
} from "../../../Features/AllSlice/Api/ProductApi";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fetch categories and featured products from DummyJSON
  const { data: categoriesData } = useProductCategoryListQuery();
  const { data: productsData } = useGetProductQuery();

  // Get featured products for banner slides (top rated ones)
  const featuredProducts =
    productsData?.products
      ?.slice()
      ?.sort((a, b) => b.rating - a.rating)
      ?.slice(0, 3) || [];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 4000,
    appendDots: (dots) => (
      <div className="absolute bottom-5 w-full flex justify-center">
        <ul className="flex gap-2 m-0 banner-dots"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full border border-gray-400 bg-transparent transition-all duration-300"></div>
    ),
  };

  // Map DummyJSON categories to display names
  const categoryDisplayNames = {
    smartphones: "Smartphones",
    laptops: "Laptops & Computers",
    fragrances: "Fragrances",
    skincare: "Skincare",
    groceries: "Groceries",
    "home-decoration": "Home & Lifestyle",
    furniture: "Furniture",
    tops: "Women's Fashion",
    "womens-dresses": "Women's Dresses",
    "womens-shoes": "Women's Shoes",
    "mens-shirts": "Men's Fashion",
    "mens-shoes": "Men's Shoes",
    "mens-watches": "Men's Watches",
    "womens-watches": "Women's Watches",
    "womens-bags": "Women's Bags",
    "womens-jewellery": "Jewellery",
    sunglasses: "Sunglasses",
    automotive: "Automotive",
    motorcycle: "Motorcycle",
    lighting: "Lighting",
  };

  // Take first 9 categories for sidebar
  const displayCategories = categoriesData?.slice(0, 9) || [];

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
    navigate(`/product?category=${category}`);
    setIsCategoryOpen(false);
  };

  const handleShopNow = (product) => {
    if (product) {
      navigate(`/product-details/${product.id}`, { state: { product } });
    } else {
      navigate("/product");
    }
  };

  return (
    <div className="container mx-auto px-4 md:px-0 font-noto-serif">
      <div className="flex flex-col md:flex-row">
        {/* Mobile Category Toggle */}
        <div
          className="md:hidden flex items-center gap-2 py-4 text-black font-semibold cursor-pointer border-b border-gray-100 mb-2"
          onClick={() => setIsCategoryOpen(!isCategoryOpen)}
        >
          <HiMenuAlt2 size={24} />
          <span>All Categories</span>
        </div>

        {/* Sidebar Categories */}
        <div
          className={`${
            isCategoryOpen
              ? "max-h-[500px] opacity-100"
              : "max-h-0 opacity-0 md:max-h-none md:opacity-100"
          } overflow-hidden transition-all duration-500 md:w-[25%] lg:w-[20%] md:border-r border-gray-200 md:pr-4 z-20`}
        >
          <ul className="flex flex-col gap-2 md:gap-4 pt-2 md:pt-10 pb-5 md:pb-0">
            {displayCategories.map((category, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(category)}
                className="flex items-center justify-between text-[14px] md:text-[16px] py-1 font-poppins text-black hover:text-Secondary2_color transition-colors cursor-pointer group capitalize"
              >
                {categoryDisplayNames[category] || category.replace("-", " ")}
                <FaChevronRight className="text-[10px] md:opacity-0 group-hover:opacity-100 transition-opacity" />
              </li>
            ))}
          </ul>
        </div>

        {/* Main Banner Slider */}
        <div className="w-full md:w-[75%] lg:w-[80%] md:pt-10 md:pl-10">
          <div className="bg-black relative overflow-hidden rounded-sm">
            <Slider {...settings}>
              {featuredProducts.length > 0 ? (
                featuredProducts.map((product) => (
                  <div key={product.id} className="outline-none">
                    <div className="flex flex-col sm:flex-row items-center justify-between px-6 md:px-16 pt-8 md:pt-14 pb-12 md:pb-14 gap-8">
                      {/* Image Left */}
                      <div className="order-1 w-full sm:w-1/2 flex justify-center">
                        <img
                          src={product.thumbnail}
                          alt={product.title}
                          className="w-[180px] md:w-[300px] lg:w-[350px] object-contain transform transition-transform hover:scale-105 duration-700 bg-white/10 rounded-lg p-4"
                        />
                      </div>

                      {/* Content Right */}
                      <div className="order-2 text-white flex flex-col items-center sm:items-start gap-4 md:gap-5 text-center sm:text-left w-full sm:w-1/2">
                        <div className="flex items-center gap-3 md:gap-6">
                          <span className="text-sm px-3 py-1 bg-Secondary2_color rounded-full">
                            {Math.round(product.discountPercentage)}% OFF
                          </span>
                          <h3 className="text-sm md:text-base font-poppins capitalize">
                            {product.category?.replace("-", " ")}
                          </h3>
                        </div>
                        <h2 className="text-[22px] md:text-[36px] font-semibold leading-tight font-inter">
                          {product.title}
                        </h2>
                        <p className="text-gray-300 text-sm line-clamp-2">
                          {product.description}
                        </p>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-Secondary2_color">
                            $
                            {(
                              product.price *
                              (1 - product.discountPercentage / 100)
                            ).toFixed(2)}
                          </span>
                          <span className="text-gray-400 line-through">
                            ${product.price}
                          </span>
                        </div>
                        <button
                          onClick={() => handleShopNow(product)}
                          className="flex items-center gap-2 text-sm md:text-base font-medium bg-Secondary2_color px-6 py-3 rounded hover:bg-opacity-90 transition-all"
                        >
                          Shop Now <FaArrowRightLong />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                // Fallback static banner
                <div className="outline-none">
                  <div className="flex flex-col sm:flex-row items-center justify-between px-6 md:px-16 pt-8 md:pt-14 pb-12 md:pb-14 gap-8">
                    <div className="order-1 w-full sm:w-1/2 flex justify-center">
                      <div className="w-[180px] md:w-[300px] h-[180px] md:h-[300px] bg-gray-800 rounded-lg animate-pulse"></div>
                    </div>
                    <div className="order-2 text-white flex flex-col items-center sm:items-start gap-4 text-center sm:text-left w-full sm:w-1/2">
                      <div className="flex items-center gap-3">
                        <FaApple className="text-3xl md:text-5xl" />
                        <h3 className="text-sm md:text-base font-poppins">
                          Loading Products...
                        </h3>
                      </div>
                      <h2 className="text-[26px] md:text-[44px] font-semibold leading-tight font-inter">
                        Amazing Deals
                      </h2>
                      <button
                        onClick={() => navigate("/product")}
                        className="flex items-center gap-2 text-sm md:text-base font-medium border-b border-gray-400 hover:border-white pb-1 transition-all"
                      >
                        Shop Now <FaArrowRightLong />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </Slider>
          </div>
        </div>
      </div>

      <style>{`
        .slick-dots li.slick-active div {
          background-color: #DB4444 !important;
          border-color: #DB4444 !important;
        }
      `}</style>
    </div>
  );
};

export default Banner;
