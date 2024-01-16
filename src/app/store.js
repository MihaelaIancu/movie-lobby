import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../features/movies/moviesSlice";
import { categoriesReducer } from "../features/categories/categoriesSlice";

const appReducers = combineReducers({
  localMovies: moviesReducer,
  localCategory: categoriesReducer,
});

export default configureStore({
  reducer: appReducers,
});
