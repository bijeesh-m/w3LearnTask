import counterReducer from "../features/counterSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        count: counterReducer,
    },
});

export default store;
