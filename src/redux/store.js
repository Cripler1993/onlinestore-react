import { configureStore } from "@reduxjs/toolkit";
import paginationReducer from "./slices/paginationReducer";
import { filter } from "lodash";
import filterReducer from "./slices/filterReducer";

export const store = configureStore({
  reducer: { pagination: paginationReducer, filter: filterReducer },
});
