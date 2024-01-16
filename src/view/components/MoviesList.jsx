import { useDispatch, useSelector } from "react-redux";
import { MovieItem } from "./MovieItem";
import {
  getFavMovieList,
  getMovieList,
} from "../../features/movies/moviesSelectors";
import { useEffect, useState } from "react";
import { setFavMovies, setMovies } from "../../features/movies/moviesSlice";
import { popularMoviesUrl } from "../../app/config";
import axios from "axios";
import {
  favCategory,
  moviesGenres,
  popularCategory,
} from "../../utils/constants";

export function MoviesList({ categoryIndex }) {
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);
  const favMovies = useSelector(getFavMovieList);
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const isFavCategory = categoryIndex === favCategory;

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios
        .get(`${popularMoviesUrl}`)
        .catch((err) => console.log(err));

      const data = await response.data;
      dispatch(setMovies(data.results));
    };

    fetchMovies();
  });

  useEffect(() => {
    if (categoryIndex === popularCategory) {
      setFilteredMovies(movies);
    }

    if (categoryIndex === favCategory) {
      favMovies && setFilteredMovies(favMovies);
    }

    const newMovies = movies?.filter((elem) =>
      elem.genre_ids.find((id) => id === moviesGenres[categoryIndex])
    );

    moviesGenres[categoryIndex] && setFilteredMovies(newMovies);
  }, [movies, favMovies, categoryIndex]);

  const onClickHandler = (item) => {
    dispatch(setFavMovies([...new Set([...favMovies, item])]));
  };

  return (
    <div className="movies-list-container">
      {filteredMovies?.map((elem, index) => (
        <MovieItem
          key={`movie_${index}`}
          title={elem.title}
          image={elem.poster_path}
          releaseDate={elem.release_date}
          onClick={() => onClickHandler(elem)}
        />
      ))}
      {isFavCategory && favMovies.length === 0 && (
        <div className="no-movie">No favourite movies added..</div>
      )}
    </div>
  );
}
