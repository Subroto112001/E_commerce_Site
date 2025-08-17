import React, { useEffect, useState } from "react";

import ItemComponent from "../CommonComponent/ItemComponent";
import { calculateDiscountPrice } from "../../Utils/Calculation";
import { useGetProductQuery } from "../../Features/AllSlice/Api/ProductApi";
import ProductComponent from "../CommonComponent/ProductComponent";
import LoadingComponent from "../CommonComponent/LoadingComponent";

const ProductPageRightside = () => {
  const { data, error, isLoading } = useGetProductQuery();

  const [dataLength, setDataLength] = useState(0);
  const [page, setPage] = useState(1);
  const [pagePerShow, setPagePerShow] = useState(9);

  /**
   *@desc: this useEffect will set the data length
   */
  useEffect(() => {
    if (data?.products) {
      setDataLength(data.products.length);
    }
  }, [data]);

  /**
   *@desc: total page calculation
   */

    const totalpage = Math.ceil(dataLength / pagePerShow);
  
    

  /**
   *@desc: it will handle going to previous page
   */

  const handlePrev = () => {
    if (page > 1) setPage(page - 1);
  };

  /**
   *@desc:  it will handle going to next page
   */

  const handleNext = () => {
    if (page < totalpage) setPage(page + 1);
  };

  /**
   *@desc: this function will set the page number of product
   */

  const handlePageItem = (index) => {
    setPage(index);
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-end">
        <h2 className="font-poppins text-[16px] font-normal text-black">
          Show:
        </h2>
        <select
          className="bg-slate-200 px-2 py-1 rounded"
          value={pagePerShow}
          onChange={(e) => {
            setPagePerShow(Number(e.target.value));
            setPage(1); 
          }}
        >
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>
      {/* product section */}
      <div className="flex gap-5 flex-wrap justify-between mt-5">
        {isLoading
          ? Array.from({ length: pagePerShow }, (_, index) => (
              <LoadingComponent key={index} />
            ))
          : data?.products
              ?.slice(page * 9 - 9, page * pagePerShow)
              .map((item) => (
                <ProductComponent
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
              ))}
      </div>
      {/* pagination */}

      <div className="flex justify-center items-center mt-[40px]">
        <ul class="inline-flex -space-x-px text-base h-10">
          <li>
            <span
              onClick={handlePrev}
              class={`flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg cursor-pointer  ${
                page === 1
                  ? "bg-gray-200 text-gray-400"
                  : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              Previous
            </span>
          </li>

          {[...new Array(totalpage)].map((_, index) => (
            <li>
              <span
                href="#"
                class={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300  cursor-pointer ${
                  page == index + 1
                    ? "bg-blue-500 text-gray-500"
                    : " text-gray-500 hover:bg-gray-100 hover:text-gray-700"
                }`}
                onClick={() => handlePageItem(index + 1)}
              >
                {index + 1}
              </span>
            </li>
          ))}

          <li>
            <span
              onClick={handleNext}
              class={`flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg cursor-pointer  ${
                page === totalpage
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700"
              }`}
            >
              Next
            </span>
          </li>
        </ul>
      </div>
      {/* pagination */}
      {/* product section*/}
    </div>
  );
};

export default React.memo(ProductPageRightside);
