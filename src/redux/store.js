import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationReducer";
import { filter } from "lodash";
import filterReducer from "./slices/filterReducer";
import productReducer from "./slices/productReducer";
import productsReducer from "./slices/productsReducer";
import cartReducer from "./slices/cartReducer";

export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filter: filterReducer,
    product: productReducer,
    products: productsReducer,
    cart: cartReducer,
  },
});
