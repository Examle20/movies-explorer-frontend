import "./Movies.css"
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import React from "react";
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";
import * as moviesApi from "../../utils/MoviesApi";

export const Movies = (props) => {

  React.useEffect(() => {
    props.onIsCardDelete(false)
    props.onErrorRequest(false)
    return () => {
      props.onIsCardDelete(false)
    }
  },[])

  return (
    <div className="movies">
      <SearchForm
        onSearchMovies={props.onSearchMovies}
        onIsSearch={props.onIsSearch}
        onDownloadMovies={props.onDownloadMovies}
      />
      <MoviesCardList
        onSetMovies={props.onSetMovies}
        isCardDelete={props.isCardDelete}
        list={props.movies}
        onMovieButton={props.onMovieButton}
        savedMovies={props.savedMovies}
        componentMain='movies'
        downLoadsMovies={props.downLoadsMovies}
        onDownloadMovies={props.onDownloadMovies}
        isLoader={props.isLoader}
        moviesNotfound={props.moviesNotfound}
        errorRequest={props.errorRequest}
      />
      <NavigationMenu />
    </div>
  );
}