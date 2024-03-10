import { createSlice } from "@reduxjs/toolkit";

const initialState = { currentPage: 1, limit: 6 };

export const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    clearPage: (state, action) => {
      state.currentPage = 1;
    },
    nextPage: (state, action) => {
      state.currentPage++;
    },
    previousPage: (state, action) => {
      state.currentPage--;
    },
  },
});

export const { clearPage, nextPage, previousPage } = paginationSlice.actions;
export default paginationSlice.reducer;
