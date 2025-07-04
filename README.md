# Basic Instruction about RTK - Redux Toolkit  
- **Installing :** ```yarn add react-redux @reduxjs/toolkit```  
- Make ```App``` folder on ```src``` folder and create ```store.js``` file.  
**Basic structures of ```redux store``` :**  
  ```
  import { configureStore } from "@reduxjs/toolkit";
  
  const store = configureStore({
    reducer: {},
  });

  export default store;```  
- Connect the ```store.js``` to react: Go to the ```main.jsx``` file and import ```Provider``` from ```react-redux``` and ```store.js``` from your folder.  
  ```
  import { Provider } from "react-redux";
  import store from "STORE_FILE_PATH";
  ```
  ```
  <Provider store={store}>
      <App />
    </Provider>
  ```
- Make ```slice``` ```EX: todoSlice.js``` file for actions.
**Basic structures of ```slice``` :**
  ```
  import { createSlice } from "@reduxjs/toolkit";
  const initialState = {
  todos: [],
  };

  const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
  });
  
  export default todoSlice.reducer;
  ```
- **For using:** Go to ```App.jsx``` and import this:
  ```
  import { useDispatch, useSelector } from "react-redux";
  import { fetchTodos } from "SLICE_FILE_PATH";
  ```
- ```useSelector()``` for get the state and ```useDispatch()``` for do something.  
  **Syntax :**
  ```useSelector((state) => state.yourSlice);```
  ```dispatch(yourActions())``` ```[Reducers exported from the Slice]```
- We need to use the ```createAsyncThunk``` middleware for fetching something or any kind of delay task.
