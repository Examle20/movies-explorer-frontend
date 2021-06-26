import "./MoviesCardList.css"
import React from "react";
import {MoviesCard} from "../MoviesCard/MoviesCard";

export const MoviesCardList = (props) => {

  return (
    <section className="movies-card">
      <ul className="movies-card__list">
        {props.list.slice(0, props.amount).map((item) => {
          return <MoviesCard
             key={item.id || item.movieId}
             data={item}
             savedMovies={props.savedMovies}
             isCardDelete={props.isCardDelete}
             onMovieButton={props.onMovieButton}
           />
        })}
      </ul>
      <button className={`movies-card__button-more ${(props.amount < 4 || props.amount >= props.list.length) && "movies-card__button-more_hidden"}`} onClick={props.onAmount}>Ещё</button>
    </section>
  );
}