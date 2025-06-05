import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: 0,
    reducers: {
        incrementCount: (state, action) => state + 1,
        decrementCount: (state, action) => state - 1,
        updateCount: (state, action) => {
            console.log(action);
            return state + action.payload;
        },
    },
});

export const { incrementCount, decrementCount, updateCount } = counterSlice.actions;
export default counterSlice.reducer;
