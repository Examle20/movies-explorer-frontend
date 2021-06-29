
import React from "react";
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css"

export const SavedMovies = (props) => {

  React.useEffect(() => {
    props.onGetSavedMovies();
    props.onIsCardDelete(true)
  }, [])

  return (
    <div className="saved-movies">
      <SearchForm
        onSearchMovies={props.onSearchMovies}
        onIsSearch={props.onIsSearch}
        onDownloadMovies={props.onDownloadMovies}
      />
      <MoviesCardList
        isCardDelete={props.isCardDelete}
        amount={props.movies.length}
        list={props.movies}
        onMovieButton={props.onMovieButton}
        componentName="savedMovies"
        downLoadsMovies={props.downLoadsMovies}
        onDownloadMovies={props.onDownloadMovies}
      />
    </div>
  );
}