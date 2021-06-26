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

  React.useEffect(() => {
    props.onIsCardDelete(false)
    return () => {
      props.onIsCardDelete(false)
    }
  },[])

  return (
    <div className="movies">
      <SearchForm
        onSearchMovies={props.onSearchMovies}
        onIsSearch={props.onIsSearch}
      />
      <MoviesCardList
        isCardDelete={props.isCardDelete}
        list={props.movies}
        amount={moviesCount}
        onAmount={handleButtonMore}
        onMovieButton={props.onMovieButton}
        savedMovies={props.savedMovies}
      />
      <NavigationMenu />
    </div>
  );
}