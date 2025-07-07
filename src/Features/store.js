import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./Slice";
import {useGetProductQuery} from './AllSlice/Api/ProductApi'


import { ProductApi } from "./AllSlice/Api/ProductApi";

export const store = configureStore({
  reducer: {
    count: counterSlice,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
