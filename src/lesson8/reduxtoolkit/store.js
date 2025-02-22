import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// Create the store with the counterReducer
const store = configureStore({
  reducer: {
    counter: counterReducer, // Reducer for the counter slice
  },
});

export default store;
