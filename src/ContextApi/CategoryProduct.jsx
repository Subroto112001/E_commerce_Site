import { useGetProductByCategoryQuery } from "../Features/AllSlice/Api/ProductApi";

export const categoryByProduct = (categoryname) => {
  const { data, error, isLoading } = useGetProductByCategoryQuery(categoryname );
  return { details: data, error, isLoading };

}    