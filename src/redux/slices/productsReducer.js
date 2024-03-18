import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseUrl } from "../../utiles/constants";

const initialState = { loading: true, products: [], error: false };

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  (params) => {
    return axios.get(baseUrl, { params }).then((json) => json.data);
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.products = action.payload;
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});

export default productsSlice.reducer;
