import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [],
  favMovies: [],
  loading: false,
  error: null,
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovies: (state, action) => {
      state.movies = action.payload;
      state.loading = false;
      state.error = null;
    },
    setFavMovies: (state, action) => {
      state.favMovies = action.payload;
      state.loading = false;
      state.error = null;
    },
    setMoviesLoading: (state) => {
      state.loading = true;
      state.error = null;
    },
    setMoviesError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { setMovies, setFavMovies, setMoviesLoading, setMoviesError } =
  moviesSlice.actions;

export const moviesReducer = moviesSlice.reducer;
