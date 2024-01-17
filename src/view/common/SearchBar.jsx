import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { popularMoviesUrl, searchMoviesUrl } from "../../app/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { fetchMovies } from "../../utils/constants";
import { getPageIndex } from "../../app/selectors/pageSelectors";

export function SearchBar() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");
  const pageIndex = useSelector(getPageIndex);

  const getCorrectUrl = () => {
    const searchUrl = `${searchMoviesUrl}&query=${userInput}&page=${pageIndex}`;

    return userInput !== ""
      ? searchUrl
      : `${popularMoviesUrl}&page=${pageIndex}`;
  };

  const onChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const onClickHandler = () => {
    fetchMovies(getCorrectUrl(), dispatch);
  };

  const onKeyHandler = (event) => {
    if (event.key === "Enter") {
      fetchMovies(getCorrectUrl(), dispatch);
    }
  };

  return (
    <div className="search-bar-container">
      <input
        type="search"
        placeholder="What movie are you lookin' for today?"
        className="search-input"
        onChange={onChangeHandler}
        onKeyPress={onKeyHandler}
      />
      <button type="submit" className="search-button" onClick={onClickHandler}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
