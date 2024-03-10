import { createSlice } from "@reduxjs/toolkit";
import { categoryArr, filterArr } from "../../utiles/constants";

const initialState = {
  category: categoryArr[0],
  filter: filterArr[0],
  activeTags: [],
  text: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setText: (state, action) => {
      state.text = action.payload;
    },
    clearText: (state, action) => {
      state.text = "";
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    clearCategory: (state, action) => {
      state.category = categoryArr[0];
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearFilter: (state, action) => {
      state.filter = filterArr[0];
    },
  },
});
export const {
  clearText,
  setText,
  setCategory,
  clearCategory,
  setFilter,
  clearFilter,
} = filterSlice.actions;
export default filterSlice.reducer;
