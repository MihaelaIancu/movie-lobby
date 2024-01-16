import { useSelector } from "react-redux";
import { imagePath } from "../../app/config";
import { getFavMovieList } from "../../features/movies/moviesSelectors";
import { getSelectedCategoryIndex } from "../../features/categories/categoriesSelectors";
import { favCategorySelected, isInFavList } from "../../utils/constants";

export function MovieItem({ title, image, releaseDate, onClick, id }) {
  const favMovies = useSelector(getFavMovieList);
  const selectedCategory = useSelector(getSelectedCategoryIndex);

  return (
    <div className="movie-item-container">
      <div className="movie-item-image">
        <img src={`${imagePath}${image}`} alt={`${title} thumbnail`} />
      </div>
      <div className="movie-item-info">
        <div>{title}</div>
        <div>{releaseDate}</div>
      </div>

      {favCategorySelected(selectedCategory) && isInFavList(id, favMovies) ? (
        <button onClick={onClick}>Remove</button>
      ) : (
        <button onClick={onClick}>Add to favourite</button>
      )}
    </div>
  );
}
