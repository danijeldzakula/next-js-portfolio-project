import { createSlice } from "@reduxjs/toolkit";

// Define the type props
export type Props = {
  value: number;
};

export type SelectCountProps = {
  counter: {
    value: number;
  };
};

// Define the initial state using that type
const initialState: Props = {
  value: 0,
};

// Create slice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state: Props) => {
      state.value += 1;
    },
    decrement: (state: Props) => {
      if (state.value >= 1) {
        state.value -= 1;
      }
    },
    reset: (state: Props) => {
      state.value = initialState.value;
    },
  },
});

export const { increment, decrement, reset } = counterSlice.actions;

export const selectCount = (state: SelectCountProps) => state.counter.value;

export default counterSlice.reducer;