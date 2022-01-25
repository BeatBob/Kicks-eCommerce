import { configureStore } from "@reduxjs/toolkit";
import modalSliceReducer from "../features/counter/modalSlice";

export const store = configureStore({
  reducer: {
    modal: modalSliceReducer,
  },
});
