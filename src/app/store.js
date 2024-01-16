import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../app/slices/moviesSlice";
import { categoriesReducer } from "../app/slices/categoriesSlice";

const appReducers = combineReducers({
  localMovies: moviesReducer,
  localCategory: categoriesReducer,
});

export default configureStore({
  reducer: appReducers,
});
