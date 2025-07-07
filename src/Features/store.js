import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./Slice";
export const store = configureStore({
  reducer: {count : counterSlice},
});
