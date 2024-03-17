import { createSlice } from "@reduxjs/toolkit";
import { calcPrice } from "../../utiles/constants";

const initialState = { cartArr: [], totalPrice: 0 };

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
      calcPrice(state);
    },
    deleteItem: (state, action) => {
      state.cartArr = state.cartArr.filter((elem) => {
        return elem.id != action.payload.id;
      });
      calcPrice(state);
    },
    clearCart: (state, action) => {
      state.cartArr = [];
      state.totalPrice = 0;
    },
    decreaseItemQuantity: (state, action) => {
      const item = state.cartArr.find((elem) => {
        return elem.id == action.payload.id;
      });
      item.count--;
      calcPrice(state);
    },
  },
});

export const selectCurrentCartItem = (id) => (store) => {
  return store.cart.cartArr.find((element) => element.id == id);
};

export const { addItem, deleteItem, clearCart, decreaseItemQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
