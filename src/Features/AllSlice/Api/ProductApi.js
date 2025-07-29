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
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetProductQuery,useBestSellingProductQuery, useProductCategoryListQuery} = ProductApi;
