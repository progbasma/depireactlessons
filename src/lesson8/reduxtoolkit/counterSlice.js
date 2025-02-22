import { createSlice } from '@reduxjs/toolkit';

// Create the slice
const counterSlice = createSlice({
  name: 'counter', // The slice name
  initialState: { count: 0 }, // Initial state
  reducers: {
    // Reducer to increment count
    increment: (state) => {
      state.count += 1;
    },
    // Reducer to decrement count
    decrement: (state) => {
      state.count -= 1;
    },
  },
});

// Export the action creators and the reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
