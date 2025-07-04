import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1; // Increment the value by 1
    },
  },
});

export default CounterSlice.reducer;
export const { increment } = CounterSlice.actions;
