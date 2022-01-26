import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      console.log(state.value);
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
      if (state.value <= 0) {
        return (state.value += 0);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = counterSlice.actions;

export default counterSlice.reducer;
