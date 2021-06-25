import "./MoviesCard.css"
import React from "react";

export const MoviesCard = (props) => {

  const { nameRU, duration, image } = props.data
  const [isLiked, setIsLiked] = React.useState(false)

  const putLike = () => {
    setIsLiked(true)
  }

  const deleteLike = () => {
    setIsLiked(false)
  }

  const handleButtonClick = () => {
    if(!isLiked) {
      props.onButton(props.data, putLike)
    } else {
      props.onDeleteMovie(props.data.id, deleteLike)
    }
  }

  React.useEffect(() => {
    if(!props.isCardDelete) {
      console.log(props.data)
      console.log(props.savedMovies)
      if (props.savedMovies.find((el) => {return el.movieId === props.data.id})) {
        setIsLiked(true)
      }
    }
  },[])

  return (
    <li className="movies-card__list-item">
      <img src={`https://api.nomoreparties.co${image.url}`} alt="Что-то с ссылкой на изображение" className="movies-card__item-image"
      />
      <div className="movies-card__item-group">
        <h2 className="movies-card__item-title">{nameRU}</h2>
        {!props.isCardDelete &&
          <button className={`movies-card__item-button ${isLiked && "movies-card__item-button_save"}`}
            onClick={handleButtonClick}
          />}
        {props.isCardDelete && <button className="movies-card__item-button movies-card__item-button_delete"/>}
      </div>
      <p className="movies-card__item-time">{duration}</p>
    </li>
  );
}