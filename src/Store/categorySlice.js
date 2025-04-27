import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categories:[]
  };

  export const categorySlice = createSlice({
    name: 'category',
    initialState,
    reducers: {
      AddAllCategories:(state,action)=>
      {
        const cats=action.payload
        state.categories=cats
      },
    },
  });



export const { AddAllCategories } = categorySlice.actions;

export default categorySlice.reducer;