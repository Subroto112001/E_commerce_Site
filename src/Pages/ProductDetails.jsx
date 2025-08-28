import React, { useEffect, useState } from "react";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";
import Star from "../Component/CommonComponent/Star";
import { calculateDiscountPrice } from "../Utils/Calculation";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";
import Heading from "../Component/CommonComponent/Heading";
import { useLocation, useNavigate } from "react-router-dom";
import { sizeOfProduct } from "../Helpers/ItemProvider";
import ItemComponent from "../Component/CommonComponent/ItemComponent";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useCategoryByProduct } from "../ContextApi/CategoryProduct";
import ProductLoading from "../Component/ProductDetailsComponent/ProductLoading";


const ProductDetails = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const product = state?.product;

  const [image, setImage] = useState(product?.images?.[0]);
  const [count, setCount] = useState(1);

  const [productHolder, setProductHolder] = useState({});
  const [relatedProduct, setRelatedProduct] = useState({});
  
  useEffect(() => {
    if (product) {
      setProductHolder(product);
      setImage(product?.images?.[0]);
       setCount(1);
    }
  }, [product]);

  const { details, error, isLoading } = useCategoryByProduct(
    productHolder.category
  );

  useEffect(() => {
    if (details) {
      setRelatedProduct(details);
    }
  }, [details]);

  if (!product) {
    return (
      <h2 className="text-center mt-10 text-xl font-semibold">
        No product data found
      </h2>
    );
  }

  return (
    <div className="container">
      {/* Breadcrumb */}
      <div className="mt-4">
        <BreadCrumb />
      </div>
      {isLoading ? (
        <ProductLoading />
      ) : (
        <div className="flex flex-row justify-between py-10">
          {/* Left side (Images) */}
          <div className="w-[55%] flex items-start gap-[30px]">
            {/* Small images */}
            <div className="flex flex-col gap-[16px]">
              {product.images?.map((img, i) => (
                <div
                  key={i}
                  className="px-[12px] py-[8px] bg-secondary_color hover:bg-gray-200 transition-all duration-300 rounded-[4px] cursor-pointer"
                  onClick={() => setImage(img)}
                >
                  <img
                    src={img}
                    alt={product.title}
                    className="w-[90px] h-[90px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Main image */}
            <div className="pt-[154px] pb-[131px] px-[27px] bg-secondary_color rounded-[4px] group overflow-hidden cursor-pointer">
              <img
                src={image}
                alt={product.title}
                className="w-[416px] h-[343px] object-contain transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          </div>

          {/* Right side (Details) */}
          <div className="w-[40%]">
            <div className="flex flex-col gap-y-6">
              {/* Title + Rating */}
              <div className="flex flex-col gap-4 pb-6 border-b border-text2-color">
                <h3 className="font-semibold text-2xl text-text2-color">
                  {product.title}
                </h3>
                <div className="flex flex-row items-center gap-2.5">
                  <Star rating={product.rating} />
                  <span className="text-gray-600 text-[14px] font-poppins font-normal">
                    ({product.rating})
                  </span>
                  <div className="h-[14px] border border-gray-600"></div>
                  <div
                    className={`${
                      product.stock > 0 ? "text-Button1_color" : "text-red-500"
                    } text-[14px] font-normal font-poppins`}
                  >
                    {product.stock > 0 ? "In Stock" : "Out Of Stock"}
                  </div>
                </div>
                <p className="font-normal text-2xl text-text2-color">
                  $
                  {calculateDiscountPrice(
                    product.price,
                    product.discountPercentage,
                    2
                  )}
                </p>
                <p className="mt-2">{product.description}</p>
              </div>

              {/* Color & Size */}
              <div className="flex flex-col gap-y-6">
                {/* Colors (dummy, static) */}
                <div className="flex flex-row gap-x-6 items-center">
                  <h3 className="font-inter font-normal text-xl text-black">
                    Colors:
                  </h3>
                  <div className="flex gap-2.5 flex-row items-center cursor-pointer">
                    <div className="w-[24px] h-[24px] bg-blue-500 rounded-full border-2 border-white"></div>
                    <div className="w-[24px] h-[24px] bg-red-400 rounded-full border-2 border-white"></div>
                  </div>
                </div>

                {/* Sizes */}
                <div className="flex flex-row gap-x-6 items-center">
                  <h3 className="font-normal font-inter text-xl text-black">
                    Size:
                  </h3>
                  <div className="flex flex-row items-center gap-4">
                    {sizeOfProduct.map((item) => (
                      <h3
                        key={item.id}
                        className={`font-medium ${item.CSS} font-poppins text-[14px] hover:bg-gray-300 transition-all duration-300 cursor-pointer text-black border border-black border-opacity-50 rounded`}
                      >
                        {item.size}
                      </h3>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="flex flex-row gap-4 items-center">
                  <div className="flex items-center border rounded">
                    <button
                      onClick={() => setCount(count > 1 ? count - 1 : 1)}
                      className="text-2xl px-3 py-3 border-r font-bold hover:bg-gray-200 cursor-pointer"
                    >
                      <FiMinus />
                    </button>
                    <div className="text-center px-[34px] py-2 text-[20px] font-medium font-poppins">
                      {count}
                    </div>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="text-2xl px-3 py-3 border-l font-bold hover:bg-gray-200 cursor-pointer"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <button className="font-medium font-poppins text-[16px] text-gray-50 px-12 py-3 rounded bg-red-500 hover:bg-red-400 cursor-pointer">
                    Buy Now
                  </button>
                  <button className="px-3.5 py-3.5 rounded border text-[17px] cursor-pointer hover:bg-red-500 hover:text-white transition-all duration-300">
                    <FaRegHeart />
                  </button>
                </div>
              </div>

              {/* Delivery / Return Info */}
              <div className="flex flex-col border rounded w-[420px]">
                <div className="py-[20px] px-[16px] border-b cursor-pointer hover:bg-gray-100">
                  <div className="flex flex-row gap-4">
                    <span className="text-[45px]">
                      <TbTruckDelivery />
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-[16px]">
                        Free Delivery
                      </h3>
                      <h3 className="font-semibold text-[12px]">
                        Enter your postal code for Delivery Availability
                      </h3>
                    </div>
                  </div>
                </div>
                <div className="py-[20px] px-[16px] cursor-pointer hover:bg-gray-100">
                  <div className="flex flex-row gap-4">
                    <span className="text-[45px]">
                      <BsArrowRepeat />
                    </span>
                    <div className="flex flex-col gap-2">
                      <h3 className="font-semibold text-[16px]">
                        Return Delivery
                      </h3>
                      <h3 className="font-semibold text-[12px]">
                        Free 30 Days Delivery Returns. Details
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related Products (dummy for now) */}
      <div className="py-[140px]">
        <Heading
          HeadingTitle={"Related Item"}
          SeconderyHeading={false}
          showtimer={false}
          isButton={false}
          isSeccendorytitle={false}
        />
        <div>
          <Swiper
            // install Swiper modules
            modules={[A11y]}
            spaceBetween={50}
            slidesPerView={4}
          >
            {relatedProduct?.products?.map((item, index) => (
              <div>
                <SwiperSlide key={index}>
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
                    itemRating={item.rating}
                    IsDiscount={true}
                    isAddcrat={true}
                    onClick={() =>
                      navigate(`/product-details/${item.id}`, {
                        state: { product: item },
                        replace: true,
                      })
                    }
                  />
                </SwiperSlide>
              </div>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
