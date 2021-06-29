import "./MoviesCard.css"
import React from "react";
import {CurrentUserContext} from "../../contexts/currentUserContext";
export const MoviesCard = (props) => {

  const currentUser = React.useContext(CurrentUserContext)
  const { nameRU, duration, image } = props.data
  const id = props.data.id || props.data.movieId
  const savedMovies = props.savedMovies || []
  const isLiked = (savedMovies.some(i => (i.movieId === id) && (i.owner === currentUser.id)));

  const handleLink = () => {
    if(typeof image === 'string') {
      return image;
    }
    else {
      return "https://api.nomoreparties.co" + image.url
    }
  }

  const handleTime = () => {
    let hours = Math.trunc(props.data.duration/60);
    let minutes = props.data.duration % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  const handleCardButton = () => {
    props.onMovieButton(props.data)
  }

  return (
    <li className="movies-card__list-item">
      <img src={handleLink()} alt="Что-то с ссылкой на изображение" className="movies-card__item-image"
      />
      <div className="movies-card__item-group">
        <h2 className="movies-card__item-title">{nameRU}</h2>
        {!props.isCardDelete &&
          <button className={`movies-card__item-button ${isLiked && "movies-card__item-button_save"}`}
            onClick={handleCardButton}
          />}
        {props.isCardDelete && <button className="movies-card__item-button movies-card__item-button_delete" onClick={handleCardButton}/>}
      </div>
      <p className="movies-card__item-time">{handleTime()}</p>
    </li>
  );
}