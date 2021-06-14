import "./Navigation.css"
import { Link } from 'react-router-dom';
export const Navigation = (props) => {
  return (
    <nav className="navigation">
      <Link to="movies" className="navigation__link navigation__link_films"> Фильмы</Link>
      <Link to="saved-movies" className="navigation__link">Сохраненные фильмы</Link>
      <div className="navigation__container">
        <Link to="profile" className="navigation__link navigation__link_account">Аккаунт</Link>
        <Link to="profile" className="navigation__link-image" />
      </div>
    </nav>
  );
}