import { configureStore } from "@reduxjs/toolkit";
import { ProductApi } from "./AllSlice/Api/ProductApi";
import cartReducer from "./AllSlice/cartSlice";
import wishlistReducer from "./AllSlice/wishlistSlice";
import filterReducer from "./AllSlice/filterSlice";

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    filter: filterReducer,
    [ProductApi.reducerPath]: ProductApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ProductApi.middleware),
});
