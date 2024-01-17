import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  page: 1,
};

const pagesSlice = createSlice({
  name: "pages",
  initialState,
  reducers: {
    setPage: (state) => {
      state.page = state.page + 1;
    },
  },
});

export const { setPage } = pagesSlice.actions;

export const pagesReducer = pagesSlice.reducer;
