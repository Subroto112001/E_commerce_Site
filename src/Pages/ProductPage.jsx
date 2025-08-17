import React from 'react'
import BreadCrumb from '../Component/CommonComponent/BreadCrumb';
import ProductPageLeftside from '../Component/ProductPageComponent/ProductPageLeftside';
import { useProductCategoryListQuery } from '../Features/AllSlice/Api/ProductApi';

const ProductPage = () => {
  const { data, error, isLoading } = useProductCategoryListQuery()

  
  return (
    <div className="container">
      <BreadCrumb />
      <div className="w-[30%] border-r-[1px] border-gray-500 my-[40px] pr-[16px]">
        <ProductPageLeftside />
      </div>
    </div>
  );
};

export default ProductPage;