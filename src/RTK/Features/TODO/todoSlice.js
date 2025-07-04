import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  //   const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/todos"
  );

  return response.data;
});

const initialState = {
  isLoading: false,
  isError: false,
  todos: [],
};

// action
const todoSlice = createSlice({
  name: "todos",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.todos = action.payload;
    });

    builder.addCase(fetchTodos.pending, (state, action) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.rejected, (state, action) => {
      state.isError = true;
      console.error({ error: action.payload });
    });
  },
  reducers: {},
});

export default todoSlice.reducer;

// https://jsonplaceholder.typicode.com/todos
