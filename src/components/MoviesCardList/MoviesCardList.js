import "./MoviesCardList.css"
import React from "react";
import {MoviesCard} from "../MoviesCard/MoviesCard";
import {allFilms} from "../../utils/constans"

export const MoviesCardList = (props) => {

  return (
    <section className="movies-card">
      <ul className="movies-card__list">
        {allFilms.slice(0, props.amount).map((item, index) => {
          return <MoviesCard
            key={index}
            src={item.src}
            title={item.title}
            time={item.time}
            isCardDelete={props.isCardDelete}
            isLiked={item.isLiked}
          />
        })}
      </ul>
      <button className={`movies-card__button-more ${props.amount < 4 && "movies-card__button-more_hidden"}`}>Ещё</button>
    </section>
  );
}