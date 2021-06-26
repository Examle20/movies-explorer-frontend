import {allFilms} from "../../utils/constans";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import React from "react";
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css"
import * as mainApi from "../../utils/MainApi";

export const SavedMovies = (props) => {

  const getSavedMovies = () => {
    mainApi.getMovies()
      .then((res) => {
        localStorage.setItem('saved-movies', JSON.stringify(res))
      })
      .catch(err => console.log(err))
  }

  React.useEffect(() => {
    props.onGetSavedMovies();
    props.onIsCardDelete(true)
  }, [])

  return (
    <div className="saved-movies">
      <SearchForm
        onSearchMovies={props.onGetSavedMovies}
        onIsSearch={props.onIsSearch}
      />
      <MoviesCardList
        isCardDelete={props.isCardDelete}
        amount={props.movies.length}
        list={props.movies}
        onMovieButton={props.onMovieButton}
      />
    </div>
  );
}