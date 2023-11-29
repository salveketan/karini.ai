// store.js
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartReducer';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    // Add other reducers if needed
  },
});

export default store;
