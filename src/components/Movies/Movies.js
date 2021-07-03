import "./Movies.css"
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import React from "react";
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";

export const Movies = (props) => {

  React.useEffect(() => {
    props.onIsCardDelete(false)
    props.onErrorRequest(false)
    props.onNotFoundError(false)
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
        list={props.movies}
        onShortSearch={props.onShortSearch}
        onSetMovies={props.onSetMovies}
        onSearch={props.onMovieButton}
      />
      <MoviesCardList
        onSetMovies={props.onSetMovies}
        isCardDelete={props.isCardDelete}
        list={props.movies}
        onMovieButton={props.onMovieButton}
        savedMovies={props.savedMovies}
        componentName='filteredMovies'
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