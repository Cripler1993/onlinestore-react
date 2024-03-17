import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationReducer";
import filterReducer from "./slices/filterReducer";
import productReducer from "./slices/productReducer";
import productsReducer from "./slices/productsReducer";
import cartReducer from "./slices/cartReducer";

const preloadedState = localStorage.getItem("reduxState")
  ? JSON.parse(localStorage.getItem("reduxState"))
  : {};
export const store = configureStore({
  reducer: {
    pagination: paginationReducer,
    filter: filterReducer,
    product: productReducer,
    products: productsReducer,
    cart: cartReducer,
  },
  preloadedState,
});

store.subscribe(() => {
  localStorage.setItem("reduxState", JSON.stringify(store.getState()));
});
