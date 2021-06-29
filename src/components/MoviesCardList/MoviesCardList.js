import "./MoviesCardList.css"
import React from "react";
import {MoviesCard} from "../MoviesCard/MoviesCard";

export const MoviesCardList = (props) => {
  const [moviesCount, setMoviesCount] = React.useState(0)


  const checkComponent = (componentName) => {
    return {moviesCount: props.list.length};
  }

  const getMoviesCount = (windowWidth) => {
    if (props.componentName === 'savedMovies') {
      return {moviesCount: props.list.length};
    }

    if (windowWidth >= 1280) {
      return {moviesCount: props.downLoadsMovies || 12, moviesCountStep: 4}
    }
    else if (windowWidth >= 480 && windowWidth < 1280) {
      return {moviesCount: props.downLoadsMovies || 8, moviesCountStep: 2}
    }
    else {
      return {moviesCount: props.downLoadsMovies || 5, moviesCountStep: 2}
    }
  }

  const handleAmount = ({moviesCount}) => {
    setMoviesCount(moviesCount)
    props.onDownloadMovies(moviesCount)
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
    console.log(props.downLoadsMovies)
    if(props.componentName !== 'savedMovies') {
      window.addEventListener("resize", handleWindowUpdate)
      return () => {
        window.removeEventListener("resize", handleWindowUpdate)
      }
    }
  }, )

  React.useEffect(() => {
    handleAmount(getMoviesCount(window.innerWidth))
    console.log(moviesCount)
  },[props.list])

  return (
    <section className="movies-card">
      <ul className="movies-card__list">
        {props.list.slice(0, moviesCount).map((item) => {
          return <MoviesCard
             key={item.id || item.movieId}
             data={item}
             savedMovies={props.savedMovies}
             isCardDelete={props.isCardDelete}
             onMovieButton={props.onMovieButton}
           />
        })}
      </ul>
      <button className={`movies-card__button-more ${(moviesCount >= props.list.length) && "movies-card__button-more_hidden"}`} onClick={handleButtonMore}>Ещё</button>
    </section>
  );
}