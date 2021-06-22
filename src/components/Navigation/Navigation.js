import "./Navigation.css"
import { Link } from 'react-router-dom';
export const Navigation = (props) => {
  return (
    <nav className="navigation">
      {props.loggedIn &&
        <div className="navigation__authorization-group">
          <Link to="movies" className="navigation__link navigation__link_films"> Фильмы</Link>
          <Link to="saved-movies" className="navigation__link">Сохраненные фильмы</Link>
          <div className="navigation__container">
            <Link to="profile" className="navigation__link navigation__link_account">Аккаунт</Link>
            <Link to="profile" className="navigation__link-image"/>
          </div>
        </div>
      }
      {!props.loggedIn &&
        <>
          <Link to="signup" className="navigation__switch">Регистрация</Link>
          <Link to="signin" className="navigation__switch navigation__switch_signin">Войти</Link>
        </>
      }
      {props.loggedIn &&
        <button className="navigation__button-popup" onClick={props.onNavigationMenu}/>
      }
    </nav>
  );
}