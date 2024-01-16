import { useSelector } from "react-redux";
import { moviesCategories } from "../../utils/constants";
import { MovieCategory } from "../components/MovieCategory";
import { MoviesList } from "../components/MoviesList";
import { getSelectedCategoryIndex } from "../../features/categories/categoriesSelectors";

export function MoviesLobby() {
  const selectedCategory = useSelector(getSelectedCategoryIndex);

  return (
    <div className="movies-container">
      <div className="movies-category-wrap">
        {moviesCategories.map((elem, index) => (
          <MovieCategory
            key={`category_${index}`}
            title={elem}
            index={index}
            isSelected={selectedCategory === index}
          />
        ))}
      </div>
      <MoviesList categoryIndex={selectedCategory} />
    </div>
  );
}
