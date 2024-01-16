import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  favMovies: [],
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
    },
    setFavMovies: (state, action) => {
      state.favMovies = action.payload;
    },
  },
});

export const { setMovies, setFavMovies } = moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
