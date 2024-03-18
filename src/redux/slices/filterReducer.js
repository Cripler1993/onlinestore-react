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
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    removeActiveTag: (state, action) => {
      state.activeTags = state.activeTags.filter((element) => {
        return element != action.payload;
      });
    },
    addActiveTag: (state, action) => {
      state.activeTags = [...state.activeTags, action.payload];
    },
    clearFilters: (state, action) => {
      state.activeTags = [];
      state.filter = filterArr[0];
      state.category = categoryArr[0];
      state.text = "";
    },
  },
});

export const {
  setText,
  setCategory,
  setFilter,
  removeActiveTag,
  addActiveTag,
  clearFilters,
} = filterSlice.actions;
export default filterSlice.reducer;
