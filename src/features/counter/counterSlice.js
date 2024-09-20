import { createSlice } from "@reduxjs/toolkit";


export const counterSlice = createSlice({
  name: "counter",

  initialState: {
    value: 1,
  },
  reducers: {
    increment: (state, action) => {
      state.value += 1;
    },
    decrement: (state, action) => {
      state.value -= 1;
      if (state.value <= 0){
        state.value = 1
      }

    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 1;
    },
  },
});

export const {increment, decrement, incrementByAmount, reset} = counterSlice.actions;
export default counterSlice.reducer;