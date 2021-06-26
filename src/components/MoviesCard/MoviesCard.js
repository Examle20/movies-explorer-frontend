import "./MoviesCard.css"
import React from "react";
import {CurrentUserContext} from "../../contexts/currentUserContext";
export const MoviesCard = (props) => {

  const currentUser = React.useContext(CurrentUserContext)
  const { nameRU, duration, image } = props.data
  console.log(props.savedMovies)
  console.log(props.data)
  const savedMovies = props.savedMovies || []
  let isLiked = (savedMovies.some(i => (i.movieId === props.data.id) && (i.owner === currentUser.id)));

  const handleLink = () => {
    if(typeof image === 'string') {
      return image;
    }
    else {
      return "https://api.nomoreparties.co" + image.url
    }
  }

  const handleDeleteMovie = () => {
    props.onDeleteMovie(props.data.id);
  }

  const handleLike = (value) => {

  }

  const handleButtonClick = () => {
    if(!isLiked) {
      props.onButton(props.data)
    } else {
      props.onDeleteMovie(props.data.id)
    }
  }


  return (
    <li className="movies-card__list-item">
      <img src={handleLink()} alt="Что-то с ссылкой на изображение" className="movies-card__item-image"
      />
      <div className="movies-card__item-group">
        <h2 className="movies-card__item-title">{nameRU}</h2>
        {!props.isCardDelete &&
          <button className={`movies-card__item-button ${isLiked && "movies-card__item-button_save"}`}
            onClick={handleButtonClick}
          />}
        {props.isCardDelete && <button className="movies-card__item-button movies-card__item-button_delete" onClick={handleDeleteMovie}/>}
      </div>
      <p className="movies-card__item-time">{duration}</p>
    </li>
  );
}