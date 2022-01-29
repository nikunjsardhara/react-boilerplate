import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./Slices/Counter/counterSlice";
import headerReducer from "./Slices/Header/headerSlice";
export const store = configureStore({
    reducer: {
        counter: counterReducer,
        header: headerReducer
    }
});