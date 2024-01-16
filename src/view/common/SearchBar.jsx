import { useState } from "react";
import { useDispatch } from "react-redux";

import { popularMoviesUrl, searchMoviesUrl } from "../../app/config";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { setMovies } from "../../app/slices/moviesSlice";
import axios from "axios";

export function SearchBar() {
  const dispatch = useDispatch();
  const [userInput, setUserInput] = useState("");

  const onChangeHandler = (event) => {
    setUserInput(event.target.value);
  };

  const getCorrectUrl = () => {
    const searchUrl = `${searchMoviesUrl}&query=${userInput}`;

    return userInput !== "" ? searchUrl : popularMoviesUrl;
  };

  const onClickHandler = () => {
    const fetchMovies = async () => {
      const response = await axios
        .get(getCorrectUrl())
        .catch((err) => console.log(err));

      const data = await response.data;
      dispatch(setMovies(data.results));
    };

    fetchMovies();
  };

  return (
    <div className="search-bar-container">
      <input
        type="search"
        placeholder="What movie are you lookin' for today?"
        className="search-input"
        onChange={onChangeHandler}
      />
      <button type="submit" className="search-button" onClick={onClickHandler}>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </button>
    </div>
  );
}
