import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

import type { Product } from "types/product";
import type { RootState } from "types/store";

interface InitialProductsState {
  products: Product[];
  selectedProduct: Product[];
  isLoading: boolean;
  selectedLoading: boolean;
  error: string;
}

const initialState: InitialProductsState = {
  products: [],
  selectedProduct: [],
  isLoading: false,
  selectedLoading: false,
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

export const fetchProductById = createAsyncThunk<Product, string>(
  "fetchProductById",
  async (id) => {
    return await axios
      .get(
        `https://my-json-server.typicode.com/WhatsLab/code-challenge/productDetails/${id}`
      )
      .then((res) => {
        return res.data;
      });
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    sortReviews: (state, { payload }) => {
      if (payload === "low-score") {
        let sortedData =
          state.selectedProduct[0]?.reviews &&
          state.selectedProduct[0]?.reviews.sort((a, b) => {
            return a.score - b.score;
          });

        state.selectedProduct[0].reviews = sortedData;
      } else {
        state.selectedProduct[0].reviews =
          state.selectedProduct[0]?.reviews &&
          state.selectedProduct[0]?.reviews.sort((a, b) => {
            return b.score - a.score;
          });
      }
    },
  },
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

    builder.addCase(fetchProductById.pending, (state) => {
      state.selectedLoading = true;
    });
    builder.addCase(fetchProductById.fulfilled, (state, { payload }) => {
      state.selectedProduct = [payload];
      state.selectedLoading = false;
    });
    builder.addCase(fetchProductById.rejected, (state, { error }) => {
      state.selectedLoading = false;
      state.error = error.message || "something wrong happen";
    });
  },
});

export const { sortReviews } = productsSlice.actions;

export const selectProductSlice = (state: RootState) => state.products;

export default productsSlice.reducer;
