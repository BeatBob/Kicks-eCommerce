import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

export const modalSlice = createSlice({
  name: "showModal",
  initialState,
  reducers: {
    modalPopUp: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { modalPopUp } = modalSlice.actions;

export default modalSlice.reducer;
