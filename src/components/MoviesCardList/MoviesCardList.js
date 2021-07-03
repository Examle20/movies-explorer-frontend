import "./MoviesCardList.css"
import React from "react";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import {
  MAX_WIDTH,
  MIDDLE_WIDTH,
  MAX_WIDTH_COUNT,
  MAX_WIDTH_COUNT_STEP,
  MIDDLE_WIDTH_COUNT,
  MIDDLE_WIDTH_COUNT_STEP,
  LOW_WIDTH_COUNT,
  SHORT_DURATION,
} from "../../utils/constans"

export const MoviesCardList = (props) => {
  const [moviesCount, setMoviesCount] = React.useState(0)
  const getMoviesCount = (windowWidth) => {
    if (props.componentName === 'savedFilteredMovies') {
      return {moviesCount: props.list.length};
    }
    if (windowWidth >= MAX_WIDTH) {
      return {moviesCount: props.downLoadsMovies || MAX_WIDTH_COUNT, MAX_WIDTH_COUNT_STEP: 4}
    }
    else if (windowWidth >= MIDDLE_WIDTH && windowWidth < MAX_WIDTH) {
      return {moviesCount: props.downLoadsMovies || MIDDLE_WIDTH_COUNT, moviesCountStep: MIDDLE_WIDTH_COUNT_STEP}
    }
    else {
      return {moviesCount: props.downLoadsMovies || LOW_WIDTH_COUNT, moviesCountStep: MIDDLE_WIDTH_COUNT_STEP}
    }
  }

  const handleAmount = ({moviesCount}) => {
    setMoviesCount(moviesCount)
    if (props.componentName !=='savedFilteredMovies') {props.onDownloadMovies(moviesCount)}
  }

  const handleWindowWidth = () => {
    handleAmount(getMoviesCount(window.innerWidth))
  }

  const handleWindowUpdate = () => {
    setTimeout(handleWindowWidth, 1000)
  }

  const handleStep = ({moviesCountStep}) => {
    setMoviesCount((count) => count + moviesCountStep)
    props.onDownloadMovies((count) => count + moviesCountStep)
  }


  const handleButtonMore = () => {
    handleStep(getMoviesCount(window.innerWidth))
  }

  React.useEffect(() => {
    if(props.componentName !== 'savedFilteredMovies') {
      window.addEventListener("resize", handleWindowUpdate)
      return () => {
        window.removeEventListener("resize", handleWindowUpdate)
      }
    }
  }, )

  React.useEffect(() => {
    handleAmount(getMoviesCount(window.innerWidth))
    localStorage.setItem(props.componentName, JSON.stringify(props.list))
  },[props.list])

  return (
    <section className="movies-card">
      {props.isLoader && <Preloader />}
      <ul className="movies-card__list">
        {props.list.length !==0 && props.list.slice(0, moviesCount).map((item) => {
          return <MoviesCard
             key={item.id || item.movieId}
             data={item}
             savedMovies={props.savedMovies}
             isCardDelete={props.isCardDelete}
             onMovieButton={props.onMovieButton}
           />
        })}
      </ul>
      {props.list.length === 0 && props.moviesNotfound && <p className="movies-card__error"> Ничего не найдено</p>}
      {props.errorRequest && <p className="movies-card__error"> Во время запроса произошла ошибка.
        Возможно, проблема с соединением или сервер недоступен.
        Подождите немного и попробуйте ещё раз</p>}
      <button className={`movies-card__button-more ${(moviesCount >= props.list.length) && "movies-card__button-more_hidden"}`} onClick={handleButtonMore}>Ещё</button>
    </section>
  );
}