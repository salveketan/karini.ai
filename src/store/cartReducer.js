// cartReducer.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
    search:''
  },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.Title !== action.payload.Title
      );
    },
    searchBar:(state, action)=>{
      state.search = action.payload
    }
  },
});

export const { addItem, removeItem ,searchBar} = cartSlice.actions;
export default cartSlice.reducer;
