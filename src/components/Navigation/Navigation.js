import "./Navigation.css"
import { Link, NavLink } from 'react-router-dom';
export const Navigation = (props) => {
  return (
    <nav className="navigation">
      {props.loggedIn &&
        <div className="navigation__authorization-group">
          <NavLink to="movies" className="navigation__link" activeClassName="navigation__link_active"> Фильмы</NavLink>
          <NavLink to="saved-movies" className="navigation__link" activeClassName="navigation__link_active">Сохраненные фильмы</NavLink>
          <NavLink to="/profile" className="navigation__container" activeClassName="navigation__container_active">
            <div  className="navigation__link navigation__link_account">Аккаунт</div>
            <div  className="navigation__link-image"/>
          </NavLink>
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