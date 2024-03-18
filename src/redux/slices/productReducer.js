import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../utiles/constants";
import axios from "axios";

const initialState = { loading: true, product: {}, error: false };

export const fetchProduct = createAsyncThunk("product/fetchProduct", (id) => {
  return axios.get(`${baseUrl}/${id}`).then((json) => json.data);
});
export const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProduct.pending, (state, action) => {
      state.loading = true;
      state.error = false;
    });
    builder.addCase(fetchProduct.fulfilled, (state, action) => {
      state.loading = false;
      state.error = false;
      state.product = action.payload;
    });
    builder.addCase(fetchProduct.rejected, (state, action) => {
      state.loading = false;
      state.error = true;
    });
  },
});
export default productSlice.reducer;
