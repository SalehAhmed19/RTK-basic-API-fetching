import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../RTK/Features/TODO/todoSlice";

const store = configureStore({
  reducer: {
    todoSlice: todoReducer,
  },
});

export default store;
