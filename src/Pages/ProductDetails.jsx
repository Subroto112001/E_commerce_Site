import React, { useEffect, useState } from "react";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";
import Star from "../Component/CommonComponent/Star";
import { calculateDiscountPrice } from "../Utils/Calculation";
import { FiMinus, FiPlus } from "react-icons/fi";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BsArrowRepeat } from "react-icons/bs";
import Heading from "../Component/CommonComponent/Heading";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { sizeOfProduct } from "../Helpers/ItemProvider";
import ItemComponent from "../Component/CommonComponent/ItemComponent";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Features/AllSlice/cartSlice";
import {
  toggleWishlist,
  selectWishlistItems,
} from "../Features/AllSlice/wishlistSlice";
import { useGetSingleProductQuery } from "../Features/AllSlice/Api/ProductApi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useCategoryByProduct } from "../ContextApi/CategoryProduct";
import ProductLoading from "../Component/ProductDetailsComponent/ProductLoading";

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  const { state } = useLocation();
  const productFromState = state?.product;

  // Fetch product from API if not in state (e.g., direct URL access)
  const { data: fetchedProduct, isLoading: isFetchingProduct } =
    useGetSingleProductQuery(id, {
      skip: !!productFromState, // Skip API call if product is in state
    });

  const product = productFromState || fetchedProduct;
  const wishlistItems = useSelector(selectWishlistItems);
  const isInWishlist = wishlistItems.some((item) => item.id === product?.id);

  const [image, setImage] = useState(product?.images?.[0]);
  const [count, setCount] = useState(1);
  const [productHolder, setProductHolder] = useState({});
  const [relatedProduct, setRelatedProduct] = useState({});

  useEffect(() => {
    if (product) {
      setProductHolder(product);
      setImage(product?.images?.[0]);
      setCount(1);
      window.scrollTo(0, 0); // Scroll to top on product change
    }
  }, [product]);

  const { details, isLoading } = useCategoryByProduct(productHolder.category);

  useEffect(() => {
    if (details) {
      setRelatedProduct(details);
    }
  }, [details]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity: count }));
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      dispatch(toggleWishlist(product));
    }
  };

  if (isFetchingProduct) {
    return (
      <div className="container mx-auto px-4 font-noto-serif">
        <div className="mt-4">
          <BreadCrumb />
        </div>
        <ProductLoading />
      </div>
    );
  }

  if (!product) {
    return (
      <h2 className="text-center mt-10 text-xl font-semibold font-noto-serif">
        No product data found
      </h2>
    );
  }

  return (
    <div className="container mx-auto px-4 font-noto-serif">
      {/* Breadcrumb */}
      <div className="mt-4">
        <BreadCrumb />
      </div>

      {isLoading ? (
        <ProductLoading />
      ) : (
        <div className="flex flex-col lg:flex-row justify-between py-6 lg:py-10 gap-10">
          {/* Left side (Images) */}
          <div className="w-full lg:w-[55%] flex flex-col-reverse md:flex-row items-start gap-4 lg:gap-[30px]">
            {/* Small images - Thumbnails */}
            <div className="flex flex-row md:flex-col gap-3 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
              {product.images?.map((img, i) => (
                <div
                  key={i}
                  className={`flex-shrink-0 p-2 bg-secondary_color hover:bg-gray-200 transition-all rounded-[4px] cursor-pointer border ${
                    image === img ? "border-red-500" : "border-transparent"
                  }`}
                  onClick={() => setImage(img)}
                >
                  <img
                    src={img}
                    alt={product.title}
                    className="w-[60px] h-[60px] lg:w-[90px] lg:h-[90px] object-contain"
                  />
                </div>
              ))}
            </div>

            {/* Main image Container */}
            <div className="w-full bg-secondary_color rounded-[4px] flex items-center justify-center p-6 lg:p-20 overflow-hidden relative min-h-[300px] lg:min-h-[500px]">
              <img
                src={image}
                alt={product.title}
                className="max-w-full h-auto max-h-[400px] object-contain transition-transform duration-500 ease-in-out hover:scale-105"
              />
            </div>
          </div>

          {/* Right side (Details) */}
          <div className="w-full lg:w-[40%]">
            <div className="flex flex-col gap-y-6">
              {/* Title + Rating */}
              <div className="flex flex-col gap-4 pb-6 border-b border-gray-300">
                <h3 className="font-semibold text-2xl lg:text-3xl text-black">
                  {product.title}
                </h3>
                <div className="flex flex-wrap items-center gap-2.5">
                  <Star rating={product.rating} />
                  <span className="text-gray-400 text-[14px] font-poppins">
                    ({product.rating} Reviews)
                  </span>
                  <div className="h-[14px] border border-gray-300 mx-1"></div>
                  <div
                    className={`${product.stock > 0 ? "text-green-500" : "text-red-500"} text-[14px] font-medium font-poppins`}
                  >
                    {product.stock > 0 ? "In Stock" : "Out Of Stock"}
                  </div>
                </div>
                <p className="font-medium text-2xl text-black">
                  $
                  {calculateDiscountPrice(
                    product.price,
                    product.discountPercentage,
                    2,
                  )}
                </p>
                <p className="text-sm leading-6 text-gray-700">
                  {product.description}
                </p>
              </div>

              {/* Color & Size */}
              <div className="flex flex-col gap-y-6">
                <div className="flex items-center gap-x-6">
                  <h3 className="font-inter text-xl">Colors:</h3>
                  <div className="flex gap-2.5 items-center">
                    <button className="w-5 h-5 bg-blue-500 rounded-full ring-offset-2 focus:ring-2 focus:ring-blue-500"></button>
                    <button className="w-5 h-5 bg-red-400 rounded-full ring-offset-2 focus:ring-2 focus:ring-red-400"></button>
                  </div>
                </div>

                <div className="flex items-center gap-x-6">
                  <h3 className="font-inter text-xl">Size:</h3>
                  <div className="flex flex-wrap items-center gap-2 md:gap-4">
                    {sizeOfProduct.map((item) => (
                      <button
                        key={item.id}
                        className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-sm font-medium border border-gray-400 rounded hover:bg-red-500 hover:text-white hover:border-red-500 transition-all"
                      >
                        {item.size}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity & Actions */}
                <div className="flex flex-wrap gap-4 items-center">
                  <div className="flex items-center border border-gray-400 rounded overflow-hidden">
                    <button
                      onClick={() => setCount(count > 1 ? count - 1 : 1)}
                      className="p-3 hover:bg-red-500 hover:text-white transition-colors border-r border-gray-400"
                    >
                      <FiMinus />
                    </button>
                    <div className="px-8 font-semibold text-lg">{count}</div>
                    <button
                      onClick={() => setCount(count + 1)}
                      className="p-3 hover:bg-red-500 hover:text-white transition-colors border-l border-gray-400"
                    >
                      <FiPlus />
                    </button>
                  </div>
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 md:flex-none px-12 py-3 bg-red-500 text-white font-medium rounded hover:bg-red-600 transition-all"
                  >
                    Add To Cart
                  </button>
                  <button
                    onClick={handleToggleWishlist}
                    className={`p-3 border border-gray-400 rounded hover:bg-red-500 hover:text-white transition-all ${isInWishlist ? "bg-red-500 text-white" : ""}`}
                  >
                    {isInWishlist ? (
                      <FaHeart size={20} />
                    ) : (
                      <FaRegHeart size={20} />
                    )}
                  </button>
                </div>
              </div>

              {/* Delivery / Return Info */}
              <div className="flex flex-col border border-gray-400 rounded w-full">
                <div className="p-4 border-b flex items-center gap-4 hover:bg-gray-50 transition-colors">
                  <TbTruckDelivery className="text-4xl" />
                  <div>
                    <h3 className="font-medium">Free Delivery</h3>
                    <p className="text-xs underline cursor-pointer">
                      Enter your postal code for Availability
                    </p>
                  </div>
                </div>
                <div className="p-4 flex items-center gap-4 hover:bg-gray-50 transition-colors">
                  <BsArrowRepeat className="text-4xl" />
                  <div>
                    <h3 className="font-medium">Return Delivery</h3>
                    <p className="text-xs">
                      Free 30 Days Delivery Returns.{" "}
                      <span className="underline cursor-pointer">Details</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Related Products */}
      <div className="py-12 lg:py-20">
        <Heading HeadingTitle={"Related Item"} />
        <div className="mt-8">
          <Swiper
            modules={[A11y, Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
            pagination={{ clickable: true }}
            className="pb-12"
          >
            {relatedProduct?.products?.map((item, index) => (
              <SwiperSlide key={index}>
                <ItemComponent
                  itemName={item.title}
                  itemPicture={item.images[0]}
                  itemDiscount={item.discountPercentage}
                  itemPrice={calculateDiscountPrice(
                    item.price,
                    item.discountPercentage,
                    2,
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
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductDetails);
