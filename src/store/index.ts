import { configureStore } from "@reduxjs/toolkit";
import productsSlice from "store/slices/product-slice";

export const store = configureStore({
  reducer: {
    products: productsSlice,
  },
});
