import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const ProductApi = createApi({
  reducerPath: "productApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (build) => ({
    GetProduct: build.query({
      query: () => `/products`,
    }),
    bestSellingProduct: build.query({
      query: () => `/products/category/smartphones`,
    }),
    productCategoryList: build.query({
      query: () => `/products/category-list`,
    }),
    getSingleProduct: build.query({
      query: (id) => `/products/${id}`,
    }),
    getProductByCategory: build.query({
      query: (category) => `/products/category/${category}`,
    }),
    searchProducts: build.query({
      query: (searchQuery) => `/products/search?q=${searchQuery}`,
    }),
    getAllProducts: build.query({
      query: ({ limit = 100, skip = 0 }) =>
        `/products?limit=${limit}&skip=${skip}`,
    }),
  }),
});

export const {
  useGetProductQuery,
  useBestSellingProductQuery,
  useProductCategoryListQuery,
  useGetSingleProductQuery,
  useGetProductByCategoryQuery,
  useSearchProductsQuery,
  useGetAllProductsQuery,
} = ProductApi;
