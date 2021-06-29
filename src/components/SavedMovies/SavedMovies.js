
import React from "react";
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css"

export const SavedMovies = (props) => {

  React.useEffect(() => {
    props.onGetSavedMovies();
    props.onErrorRequest(false)
    props.onIsCardDelete(true)
  }, [])

  return (
    <div className="saved-movies">
      <SearchForm
        list={props.movies}
        onSearchMovies={props.onSearchMovies}
        onIsSearch={props.onIsSearch}
        onDownloadMovies={props.onDownloadMovies}
        onSetMovies={props.onSetMovies}
        onShortSearch={props.onShortSearch}
      />
      <MoviesCardList
        isCardDelete={props.isCardDelete}
        amount={props.movies.length}
        list={props.movies}
        onMovieButton={props.onMovieButton}
        componentName="savedMovies"
        downLoadsMovies={props.downLoadsMovies}
        onDownloadMovies={props.onDownloadMovies}
        isLoader={props.isLoader}
        moviesNotfound={props.moviesNotfound}
        errorRequest={props.errorRequest}
      />
    </div>
  );
}