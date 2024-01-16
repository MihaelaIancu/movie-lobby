export const apiKey = process.env.REACT_APP_API;
export const basedPopularMoviesUrl =
  "https://api.themoviedb.org/3/movie/popular";
export const popularMoviesUrl = `${basedPopularMoviesUrl}?api_key=${apiKey}`;
export const basedGenresMoviesUrl =
  "https://api.themoviedb.org/3/genre/movie/list";
export const genresMoviesUrl = `${basedGenresMoviesUrl}?api_key=${apiKey}`;
