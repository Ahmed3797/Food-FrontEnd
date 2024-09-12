// slices/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  totalPrice:0
};

export const cartPriceSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    AddInTotalPrice:(state,action)=>
    {
      const price=action.payload
      state.totalPrice+=price
    },
    MinusInTotalPrice:(state,action)=>
    {
      const price=action.payload
      state.totalPrice-=price
    },
    clear:(state,action)=>
    {
      state.totalPrice=0
    }
  


    
  },
});

export const { AddInTotalPrice,MinusInTotalPrice,clear } = cartPriceSlice.actions;

export default cartPriceSlice.reducer;
