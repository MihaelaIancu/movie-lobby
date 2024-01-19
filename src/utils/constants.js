import axios from "axios";
import {
  setMovies,
  setMoviesError,
  setMoviesLoading,
} from "../app/slices/moviesSlice";

export const moviesCategories = [
  "Popular",
  "Favourite",
  "Drama",
  "Animation",
  "Comedies",
];

export const moviesGenres = {
  2: 18, //Drama
  3: 16, //Animation
  4: 35, //Animation
};

export const popularCategory = 0;

export const favCategory = 1;

export const emptyList = (movies) => movies.length === 0;

export const favCategorySelected = (category) => category === favCategory;

export const popularCategorySelected = (category) =>
  category === popularCategory;

export const isInFavList = (movieId, movies) => {
  return movies.find((elem) => elem.id === movieId);
};

export const fetchMovies = async (url, page, movies, dispatch) => {
  dispatch(setMoviesLoading());

  try {
    const response = await axios.get(`${url}&page=${page}`);
    const data = await response.data;
    dispatch(setMovies([...movies, ...data.results]));
  } catch (error) {
    dispatch(setMoviesError(error.message));
  }
};

export const fetchMoviesAtSearch = async (url, dispatch) => {
  dispatch(setMoviesLoading());

  try {
    const response = await axios.get(`${url}`);

    const data = await response.data;
    dispatch(setMovies(data.results));
  } catch (error) {
    dispatch(setMoviesError(error.message));
  }
};

// export const fetchMoviesGenres = () => {
//   const fetchMovies = async () => {
//     const response = await axios
//       .get(`${genresMoviesUrl}`)
//       .catch((err) => console.log(err));

//     const data = await response.data;
//     const genresObj = data.genres;
//   };
// };
