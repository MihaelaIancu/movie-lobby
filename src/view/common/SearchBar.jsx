import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export function SearchBar() {
  return (
    <div className="search-bar-container">
      <input
        type="search"
        placeholder="What movie are you lookin' for today?"
        className="search-input"
      />
      <button type="submit" className="search-button">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
