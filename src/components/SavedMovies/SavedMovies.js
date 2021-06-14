import {allFilms} from "../../utils/constans";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import React from "react";

export const SavedMovies = (props) => {

  return (
    <section className="movies-card">
      <ul className="movies-card__list">
        {allFilms.slice(0,3).map((item) => {
          return <MoviesCard src={item.src} title={item.title} time={item.time}/>
        })}
      </ul>
      <button className="movies-card__button-more">Ещё</button>
    </section>
  );
}