import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItem: [],
  // { img: {}, name: {}, desc: {}, price: {} }
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    addItemCart: (state, action) => {
      const pseudoId = new Date().getTime();

      state.cartItem.push({
        id: pseudoId,
        image: action.payload.product.img,
        name: action.payload.product.name,
        productId: action.payload.product.id,
        quantity: action.payload.product.value,
        price: action.payload.product.price,
        totalPrice: action.payload.product.total,
      });
    },
  },
});

export const getCartItems = (state) => state.counter.cartItem;
export const getTotalPrice = (state) => {
  return state.counter.cartItem.reduce((total, cartItem) => {
    return cartItem.totalPrice + total;
  }, 0);
};

// Action creators are generated for each case reducer function
export const { addItemCart } = counterSlice.actions;

export default counterSlice.reducer;
