import { useSelector } from "react-redux";

import { imagePath } from "../../app/config";
import moviePlaceholder from "../../assets/images/poster-placeholder.png";
import { getFavMovieList } from "../../app/selectors/moviesSelectors";
import { isInFavList } from "../../utils/constants";

export function MovieItem({ title, image, releaseDate, onClick, id }) {
  const favMovies = useSelector(getFavMovieList);
  const defaultImage = !image ? moviePlaceholder : `${imagePath}${image}`;

  return (
    <div className="movie-item-container">
      <div className="movie-item-image">
        <img src={defaultImage} alt={`${title} thumbnail`} />
      </div>
      <div className="movie-item-info">
        <div style={{ fontWeight: "bold" }}>{title}</div>
        <div style={{ fontSize: "12px", marginTop: "5px" }}>{releaseDate}</div>
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
