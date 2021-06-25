import "./Movies.css"
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import React from "react";
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";
import * as moviesApi from "../../utils/MoviesApi";

export const Movies = (props) => {

  const [moviesCount, setMoviesCount] = React.useState(4)

  const handleButtonMore = () => {
    setMoviesCount((count) => count + 4)
  }

  const getMovies = () => {
    moviesApi.getMovies()
      .then((res) => {
        localStorage.setItem('movies', JSON.stringify(res))
      })
      .catch(err => console.log(err))
  }

  return (
    <div className="movies">
      <SearchForm
        setMovies={props.onSetMovies}
        movies={props.movies}
        storageItem="movies"
        onGetMovies={getMovies}
      />
      <MoviesCardList
        isCardDelete={props.isCardDelete}
        list={props.movies}
        amount={moviesCount}
        onAmount={handleButtonMore}
      />
      <NavigationMenu />
    </div>
  );
}