import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todoSlices";


const store = configureStore({
    reducer: {
        todos: todoSlice
    }
})
export default store
  
