import { useDispatch } from "react-redux";
import { setCategory } from "../../features/categories/categoriesSlice";

export function MovieCategory({ title, index, isSelected }) {
  const dispatch = useDispatch();
  const activeClass = isSelected ? "active" : "";

  const onClickHandler = (item) => {
    dispatch(setCategory(item));
  };

  return (
    <div className="movie-category-container">
      <button
        className={`${activeClass}`}
        onClick={() => onClickHandler(index)}
      >
        {title}
      </button>
    </div>
  );
}
