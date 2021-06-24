import {allFilms} from "../../utils/constans";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import React from "react";
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css"

export const SavedMovies = (props) => {
  React.useEffect(() => {

  })
  return (
    <div className="saved-movies">
      <SearchForm/>
      <MoviesCardList isCardDelete={props.isCardDelete} amount={3}/>
    </div>
  );
}