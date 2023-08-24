import { createSlice } from "@reduxjs/toolkit";

const exampleSlice = createSlice({
    name: "count",
    initialState: {
        count: 0,
    },
    reducers: {
        setIncrease: (state, action) => {
            state.count = state.count + action.payload;
        },
        setDecrease: (state, action) => {
            if (state.count === 0) {
                return;
            }
            state.count = state.count - action.payload;
        },
    },
});

export const { setIncrease, setDecrease } = exampleSlice.actions;
export default exampleSlice.reducer;
