import { createSlice } from "@reduxjs/toolkit";
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    count: 0,
  },
  reducers: {
    // at the the begining of our work the state is equal to initialState and then it is current state.
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    incrementByamount: (state, action) => {
      state.count += action.payload;
    },
  },
});
export const { increment, decrement, incrementByamount } = counterSlice.actions;
export default counterSlice.reducer;
