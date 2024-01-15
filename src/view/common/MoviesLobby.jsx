import { moviesCategories } from "../../utils/constants";
import { MovieCategory } from "../components/MovieCategory";
import { MoviesList } from "../components/MoviesList";

export function MoviesLobby() {
  return (
    <div className="movies-container">
      <div className="movies-category-wrap">
        {moviesCategories.map((elem) => (
          <MovieCategory key={`category_${elem}`} title={elem} />
        ))}
      </div>
      <MoviesList />
    </div>
  );
}
