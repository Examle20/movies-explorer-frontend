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

  React.useEffect(() => {
    // props.onCheckMovies();
    props.onIsCardDelete(false)
    return () => {
      props.onIsCardDelete(false)
    }
  },[])

  return (
    <div className="movies">
      <SearchForm
        setMovies={props.onSetMovies}
        movies={props.movies}
        storageItem="movies"
        onSearchMovies={props.onSearchMovies}
        onIsSearch={props.onIsSearch}
      />
      <MoviesCardList
        onDeleteMovie={props.onDeleteMovie}
        isCardDelete={props.isCardDelete}
        list={props.movies}
        amount={moviesCount}
        onAmount={handleButtonMore}
        onButton={props.onSaveMovie}
        onMovieButton={props.onMovieButton}
        savedMovies={props.savedMovies}
      />
      <NavigationMenu />
    </div>
  );
}