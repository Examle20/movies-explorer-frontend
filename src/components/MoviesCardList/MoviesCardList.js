import "./MoviesCardList.css"
import React from "react";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import {allFilms} from "../../utils/constans"

export const MoviesCardList = (props) => {

  return (
    <section className="movies-card">
      <ul className="movies-card__list">
        {allFilms.slice(0,5).map((item) => {
          return <MoviesCard
            src={item.src}
            title={item.title}
            time={item.time}
            isCardDelete={props.isCardDelete}/>
        })}
      </ul>
      <button className="movies-card__button-more">Ещё</button>
    </section>
  );
}