import "./MoviesCard.css"

export const MoviesCard = (props) => {
  return (
    <li className="movies-card__list-item">
      <img src={props.src} alt="Что-то с ссылкой на изображение" className="movies-card__item-image"
      />
      <div className="movies-card__item-group">
        <h2 className="movies-card__item-title">{props.title}</h2>
        <button className="movies-card__item-like"/>
      </div>
      <p className="movies-card__item-time">{props.time}</p>
    </li>
  );
}