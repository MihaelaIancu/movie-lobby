export const getMoviesState = (state) => state?.localMovies;

export const getMovieList = (state) => getMoviesState(state)?.movies;

export const getFavMovieList = (state) => getMoviesState(state)?.favMovies;
