import { useState } from "react";
import { useDispatch } from "react-redux";

import { popularMoviesUrl, searchMoviesUrl } from "../../app/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { fetchMoviesAtSearch } from "../../utils/constants";

export function SearchBar() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const getCorrectUrl = () => {
    const searchUrl = `${searchMoviesUrl}&query=${userInput}`;

    return userInput !== "" ? searchUrl : `${popularMoviesUrl}&page=1`;
  };

  const onChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const onClickHandler = () => {
    fetchMoviesAtSearch(getCorrectUrl(), dispatch);
  };

  const onKeyHandler = (event) => {
    if (event.key === "Enter") {
      fetchMoviesAtSearch(getCorrectUrl(), dispatch);
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
