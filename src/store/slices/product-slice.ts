import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import type { Product } from "types/product";
import type { RootState } from "types/store";

interface InitialProductsState {
  products: Product[];
  isLoading: boolean;
  error: string;
}

const initialState: InitialProductsState = {
  products: [],
  isLoading: false,
  error: "",
};

export const fetchProducts = createAsyncThunk<Product[]>(
  "fetchProducts",
  async () => {
    return await axios
      .get(
        "http://my-json-server.typicode.com/WhatsLab/code-challenge/products"
      )
      .then((res) => {
        return res.data;
      });
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, { payload }) => {
      state.products = payload;
      state.isLoading = false;
    });
    builder.addCase(fetchProducts.rejected, (state, { error }) => {
      state.isLoading = false;
      state.error = error.message || "something wrong happen";
    });
  },
});

export const selectProductSlice = (state: RootState) => state.products;

export default productsSlice.reducer;
