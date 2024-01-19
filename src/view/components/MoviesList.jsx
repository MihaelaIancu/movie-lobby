import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";

import {
  emptyList,
  favCategorySelected,
  fetchMovies,
  isInFavList,
  moviesGenres,
  popularCategorySelected,
} from "../../utils/constants";
import {
  getErrorMessage,
  getFavMovieList,
  getLoadingState,
  getMovieList,
} from "../../app/selectors/moviesSelectors";
import { popularMoviesUrl } from "../../app/config";
import { setFavMovies } from "../../app/slices/moviesSlice";
import { MovieItem } from "./MovieItem";
import { getPageIndex } from "../../app/selectors/pageSelectors";
import { setPage } from "../../app/slices/pageSlice";
import { LoadingMessage } from "../common/LoadingMessage";
import { LoadingSpinner } from "../common/LoadingSpinner";

export function MoviesList({ categoryIndex }) {
  const dispatch = useDispatch();

  const movies = useSelector(getMovieList);
  const favMovies = useSelector(getFavMovieList);
  const pageIndex = useSelector(getPageIndex);
  const error = useSelector(getErrorMessage);
  const loading = useSelector(getLoadingState);

  const [filteredMovies, setFilteredMovies] = useState(movies);
  const containerRef = useRef(null);

  useEffect(() => {
    fetchMovies(popularMoviesUrl, pageIndex, movies, dispatch);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (popularCategorySelected(categoryIndex)) {
      setFilteredMovies(movies);
    }

    if (favCategorySelected(categoryIndex)) {
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

  const handleScroll = () => {
    const container = containerRef.current;
    if (
      container &&
      container.scrollTop + container.clientHeight === container.scrollHeight
    ) {
      dispatch(setPage());
      fetchMovies(popularMoviesUrl, pageIndex + 1, movies, dispatch);
    }
  };

  return (
    <div
      className="movies-list-container"
      ref={containerRef}
      onScroll={handleScroll}
    >
      {filteredMovies &&
        filteredMovies?.map((elem, index) => (
          <MovieItem
            id={elem.id}
            key={`movie_${index}`}
            title={elem.title}
            image={elem.poster_path}
            releaseDate={elem.release_date}
            onClick={() => onClickHandler(elem)}
          />
        ))}

      {emptyList(filteredMovies) ? (
        <LoadingMessage message="No movies found" />
      ) : (
        error && <LoadingMessage message="Error while loading your movies" />
      )}

      {loading && <LoadingSpinner />}
    </div>
  );
}
