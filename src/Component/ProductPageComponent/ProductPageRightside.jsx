import React, { useEffect, useState, useMemo } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { calculateDiscountPrice } from "../../Utils/Calculation";
import {
  useGetProductQuery,
  useGetProductByCategoryQuery,
} from "../../Features/AllSlice/Api/ProductApi";
import {
  selectCategory,
  selectPriceRange,
  selectSortBy,
} from "../../Features/AllSlice/filterSlice";
import ProductComponent from "../CommonComponent/ProductComponent";
import LoadingComponent from "../CommonComponent/LoadingComponent";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const ProductPageRightside = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();

  // Get category from URL or Redux
  const categoryFromUrl = searchParams.get("category");
  const categoryFromRedux = useSelector(selectCategory);
  const selectedCategory = categoryFromUrl || categoryFromRedux;
  const priceRange = useSelector(selectPriceRange);
  const sortBy = useSelector(selectSortBy);

  // Fetch all products or by category
  const { data: allProductsData, isLoading: isLoadingAll } = useGetProductQuery(
    undefined,
    {
      skip: !!selectedCategory,
    },
  );
  const { data: categoryProductsData, isLoading: isLoadingCategory } =
    useGetProductByCategoryQuery(selectedCategory, {
      skip: !selectedCategory,
    });

  const data = selectedCategory ? categoryProductsData : allProductsData;
  const isLoading = selectedCategory ? isLoadingCategory : isLoadingAll;

  const [page, setPage] = useState(1);
  const [pagePerShow, setPagePerShow] = useState(10);

  // Reset page when category changes
  useEffect(() => {
    setPage(1);
  }, [selectedCategory]);

  // Filter and sort products
  const filteredProducts = useMemo(() => {
    if (!data?.products) return [];

    let products = [...data.products];

    // Filter by price range
    products = products.filter((product) => {
      const discountedPrice = calculateDiscountPrice(
        product.price,
        product.discountPercentage,
        2,
      );
      return (
        discountedPrice >= priceRange.min && discountedPrice <= priceRange.max
      );
    });

    // Sort products
    switch (sortBy) {
      case "price-low":
        products.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        products.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        products.sort((a, b) => b.rating - a.rating);
        break;
      default:
        break;
    }

    return products;
  }, [data, priceRange, sortBy]);

  const dataLength = filteredProducts.length;
  const totalpage = Math.ceil(dataLength / pagePerShow);

  // Pagination Logic
  const lastIndex = page * pagePerShow;
  const firstIndex = lastIndex - pagePerShow;
  const currentProducts = filteredProducts.slice(firstIndex, lastIndex);

  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (page < totalpage) {
      setPage(page + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleProductClick = (product) => {
    navigate(`/product-details/${product.id}`, { state: { product } });
  };

  return (
    <div className="font-noto-serif">
      {/* Top Bar: Sort/Show */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-y-3 mb-6 px-1 md:px-0">
        <div>
          {selectedCategory && (
            <p className="text-sm font-medium text-Secondary2_color capitalize mb-1">
              Category: {selectedCategory.replace("-", " ")}
            </p>
          )}
          <p className="text-xs md:text-sm text-gray-500">
            Showing{" "}
            <span className="font-semibold text-black">
              {dataLength > 0 ? firstIndex + 1 : 0}-
              {Math.min(lastIndex, dataLength)}
            </span>{" "}
            of {dataLength} products
          </p>
        </div>

        <div className="flex items-center gap-x-3">
          <h2 className="font-poppins text-xs md:text-[16px] font-normal text-black">
            Show:
          </h2>
          <select
            className="bg-white border border-gray-300 px-2 py-1 md:px-3 md:py-1.5 rounded-sm text-xs md:text-sm focus:ring-1 focus:ring-black outline-none"
            value={pagePerShow}
            onChange={(e) => {
              setPagePerShow(Number(e.target.value));
              setPage(1);
            }}
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="40">40</option>
          </select>
        </div>
      </div>

      {/* Product Grid */}
      {dataLength === 0 && !isLoading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <h2 className="text-xl font-semibold font-poppins mb-4">
            No products found
          </h2>
          <p className="text-gray-500 mb-8">
            Try adjusting your filters or browse all products.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-6 md:gap-x-6 md:gap-y-8">
          {isLoading
            ? Array.from({ length: pagePerShow }, (_, index) => (
                <LoadingComponent key={index} />
              ))
            : currentProducts?.map((item) => (
                <div
                  key={item.id}
                  className="w-full cursor-pointer"
                  onClick={() => handleProductClick(item)}
                >
                  <ProductComponent
                    product={item}
                    itemName={item.title}
                    itemPicture={item.thumbnail || item.images[0]}
                    itemDiscount={item.discountPercentage}
                    itemPrice={calculateDiscountPrice(
                      item.price,
                      item.discountPercentage,
                      2,
                    )}
                    itemPrevpRICE={item.price}
                    itemRating={item?.rating}
                    IsDiscount={item.discountPercentage > 0}
                    isAddcrat={false}
                    onViewClick={() => handleProductClick(item)}
                  />
                </div>
              ))}
        </div>
      )}

      {/* Pagination Container */}
      {totalpage > 1 && (
        <div className="flex justify-center items-center mt-12 mb-8">
          <nav aria-label="Product pagination">
            <ul className="inline-flex items-center -space-x-px shadow-sm">
              <li>
                <button
                  disabled={page === 1}
                  onClick={handlePrev}
                  className={`flex items-center justify-center w-10 h-10 md:w-auto md:px-4 leading-tight border border-gray-300 rounded-s-lg transition-colors ${
                    page === 1
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <FaChevronLeft size={14} />
                  <span className="hidden md:block ml-2">Previous</span>
                </button>
              </li>

              {/* Limited Page Numbers for Mobile */}
              {[...new Array(totalpage)].map((_, index) => {
                const pageNum = index + 1;
                if (
                  totalpage > 5 &&
                  Math.abs(page - pageNum) > 1 &&
                  pageNum !== 1 &&
                  pageNum !== totalpage
                ) {
                  if (pageNum === 2 || pageNum === totalpage - 1)
                    return (
                      <li key={index} className="px-2 text-gray-400">
                        ...
                      </li>
                    );
                  return null;
                }

                return (
                  <li key={index}>
                    <button
                      onClick={() => {
                        setPage(pageNum);
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }}
                      className={`flex items-center justify-center w-10 h-10 leading-tight border border-gray-300 text-sm md:text-base transition-colors ${
                        page === pageNum
                          ? "bg-Secondary2_color text-white border-Secondary2_color"
                          : "bg-white text-gray-500 hover:bg-gray-100"
                      }`}
                    >
                      {pageNum}
                    </button>
                  </li>
                );
              })}

              <li>
                <button
                  disabled={page === totalpage}
                  onClick={handleNext}
                  className={`flex items-center justify-center w-10 h-10 md:w-auto md:px-4 leading-tight border border-gray-300 rounded-e-lg transition-colors ${
                    page === totalpage
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : "bg-white text-gray-500 hover:bg-gray-100"
                  }`}
                >
                  <span className="hidden md:block mr-2">Next</span>
                  <FaChevronRight size={14} />
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default React.memo(ProductPageRightside);
