export const getMoviesState = (state) => state?.localMovies;

export const getMovieList = (state) => getMoviesState(state)?.movies;

export const getFavMovieList = (state) => getMoviesState(state)?.favMovies;

export const getLoadingState = (state) => getMoviesState(state)?.loading;

export const getErrorMessage = (state) => getMoviesState(state)?.error;
