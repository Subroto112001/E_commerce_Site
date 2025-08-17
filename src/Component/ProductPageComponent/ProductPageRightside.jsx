import React from "react";

import ItemComponent from "../CommonComponent/ItemComponent";
import { calculateDiscountPrice } from "../../Utils/Calculation";
import { useGetProductQuery } from "../../Features/AllSlice/Api/ProductApi";
import ProductComponent from "../CommonComponent/ProductComponent";

const ProductPageRightside = () => {
    const { data, error, isLoading } = useGetProductQuery();
    


    
  return (
    <div>
      <div className="flex flex-row items-center gap-x-2 justify-end">
        <h2 className="font-poppins text-[16px] font-normal text-black">
          Show:
        </h2>
        <select name="" id="" className="bg-slate-200 px-2 py-1 rounded ">
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>
      {/* product section */}
      <div className="flex gap-5 flex-wrap">
        {data?.products?.map((item) => (
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

      {/* product section*/}
    </div>
  );
};

export default ProductPageRightside;
