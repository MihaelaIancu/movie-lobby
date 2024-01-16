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

export const isInFavList = (movieId, movies) => {
  return movies.find((elem) => elem.id === movieId);
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
