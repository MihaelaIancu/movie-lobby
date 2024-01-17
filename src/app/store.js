import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { moviesReducer } from "../app/slices/moviesSlice";
import { categoriesReducer } from "../app/slices/categoriesSlice";
import { pagesReducer } from "./slices/pageSlice";

const appReducers = combineReducers({
  localMovies: moviesReducer,
  localCategory: categoriesReducer,
  localPage: pagesReducer,
});

export default configureStore({
  reducer: appReducers,
});
