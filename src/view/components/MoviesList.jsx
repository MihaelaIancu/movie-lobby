import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";

import {
  emptyList,
  favCategory,
  favCategorySelected,
  isInFavList,
  moviesGenres,
  popularCategory,
} from "../../utils/constants";
import {
  getFavMovieList,
  getMovieList,
} from "../../app/selectors/moviesSelectors";
import { setFavMovies, setMovies } from "../../app/slices/moviesSlice";
import { popularMoviesUrl } from "../../app/config";
import { MovieItem } from "./MovieItem";
import axios from "axios";

export function MoviesList({ categoryIndex }) {
  const dispatch = useDispatch();
  const movies = useSelector(getMovieList);
  const favMovies = useSelector(getFavMovieList);
  const [filteredMovies, setFilteredMovies] = useState(movies);

  useEffect(() => {
    const fetchMovies = async () => {
      const response = await axios
        .get(`${popularMoviesUrl}`)
        .catch((err) => console.log(err));

      const data = await response.data;
      dispatch(setMovies(data.results));
    };

    fetchMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
    if (isInFavList(item.id, favMovies)) {
      dispatch(setFavMovies(favMovies.filter((elem) => elem.id !== item.id)));
    } else {
      dispatch(setFavMovies([...new Set([...favMovies, item])]));
    }
  };

  return (
    <div className="movies-list-container">
      {filteredMovies?.map((elem, index) => (
        <MovieItem
          id={elem.id}
          key={`movie_${index}`}
          title={elem.title}
          image={elem.poster_path}
          releaseDate={elem.release_date}
          onClick={() => onClickHandler(elem)}
        />
      ))}
      {favCategorySelected(categoryIndex) && emptyList(favMovies) && (
        <div className="no-movie">No favourite movies added..</div>
      )}
    </div>
  );
}
