import { createSlice } from "@reduxjs/toolkit";

const initialState = { cartArr: [] };

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const item = state.cartArr.find((elem) => {
        return elem.id == action.payload.id;
      });
      if (!item) {
        state.cartArr.push({ ...action.payload, count: 1 });
      } else {
        item.count++;
      }
    },
    deleteItem: () => {},
    clearCart: (state, action) => {
      state.cartArr = [];
    },
    decreaseItemQuantity: () => {},
  },
});

export const { addItem, deleteItem, clearCart, decreaseItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
