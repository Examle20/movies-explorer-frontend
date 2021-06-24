import "./MoviesCardList.css"
import React from "react";
import {MoviesCard} from "../MoviesCard/MoviesCard";

export const MoviesCardList = (props) => {

  return (
    <section className="movies-card">
      <ul className="movies-card__list">
        {props.list.slice(0, props.amount).map((item) => {
          return <MoviesCard
             key={item.id}
             title={item.nameRU}
             time={item.duration}
             isCardDelete={props.isCardDelete}
             isLiked={item.isLiked}
             src={`https://api.nomoreparties.co${item.image.url}`}
           />
        })}
      </ul>
      <button className={`movies-card__button-more ${props.amount < 4 && "movies-card__button-more_hidden"}`} onClick={props.onAmount}>Ещё</button>
    </section>
  );
}