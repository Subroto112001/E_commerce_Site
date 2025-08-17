import React from "react";
import BreadCrumb from "../Component/CommonComponent/BreadCrumb";
import ProductPageLeftside from "../Component/ProductPageComponent/ProductPageLeftside";
import ProductPageRightside from "../Component/ProductPageComponent/ProductPageRightside";

const ProductPage = () => {
  return (
    <div className="container">
      <BreadCrumb />
      <div className=" flex flex-row">
        <div className="w-[25%] border-r-[1px] border-gray-500 my-[40px] pr-[16px]">
          <ProductPageLeftside />
        </div>
        <div className="w-[75%] pl-4">
          <ProductPageRightside />
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductPage);
