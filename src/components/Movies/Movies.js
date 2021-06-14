import "./Movies.css"
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import React from "react";

export const Movies = (props) => {

  React.useEffect(() => {
    props.onLoggedIn(true)

    return () => {
      props.onLoggedIn(false)
    }
  })

  return (
    <div className="movies">
      <SearchForm/>
      <MoviesCardList/>
    </div>
  );
}