import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  category: 0,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = categoriesSlice.actions;

export const categoriesReducer = categoriesSlice.reducer;
