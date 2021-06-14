import {allFilms} from "../../utils/constans";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import React from "react";
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";

export const SavedMovies = (props) => {

  return (
    <>
      <SearchForm/>
      <MoviesCardList/>
    </>
  );
}