import { useSelector } from "react-redux";

import { imagePath } from "../../app/config";
import { getFavMovieList } from "../../app/selectors/moviesSelectors";
import { isInFavList } from "../../utils/constants";

export function MovieItem({ title, image, releaseDate, onClick, id }) {
  const favMovies = useSelector(getFavMovieList);

  return (
    <div className="movie-item-container">
      <div className="movie-item-image">
        <img src={`${imagePath}${image}`} alt={`${title} thumbnail`} />
      </div>
      <div className="movie-item-info">
        <div>{title}</div>
        <div>{releaseDate}</div>
      </div>

      {isInFavList(id, favMovies) ? (
        <button className="remove-button" onClick={onClick}>
          Remove
        </button>
      ) : (
        <button onClick={onClick}>Add to favourite</button>
      )}
    </div>
  );
}
