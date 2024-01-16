export const apiKey = process.env.REACT_APP_API;

export const imagePath = "https://image.tmdb.org/t/p/w185";

export const basedPopularMoviesUrl =
  "https://api.themoviedb.org/3/movie/popular";
export const basedGenresMoviesUrl =
  "https://api.themoviedb.org/3/genre/movie/list";
export const basedSearchMoviesUrl = "https://api.themoviedb.org/3/search/movie";

export const popularMoviesUrl = `${basedPopularMoviesUrl}?api_key=${apiKey}`;
export const genresMoviesUrl = `${basedGenresMoviesUrl}?api_key=${apiKey}`;
export const searchMoviesUrl = `${basedSearchMoviesUrl}?api_key=${apiKey}`;
