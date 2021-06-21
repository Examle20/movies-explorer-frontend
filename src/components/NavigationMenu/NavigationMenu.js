import "./NavigationMenu.css"
import { Link, NavLink } from 'react-router-dom';

export const NavigationMenu = (props) => {

  const closeNavigationMenu = () => {
    props.onNavigationMenu(false)
  }

  return (
    <>
      { props.isNavigationMenuOpen &&
      <div className="navigation-menu">
        <div className="navigation-menu__container">
          <button className="navigation-menu__button-close" onClick={closeNavigationMenu}/>
          <nav className="navigation-menu__links">
            <NavLink to="/" className="navigation-menu__link-item" exact activeClassName="navigation-menu__link-item_active">Главная</NavLink>
            <NavLink to="/movies" className="navigation-menu__link-item" exact activeClassName="navigation-menu__link-item_active">Фильмы</NavLink>
            <NavLink to="/saved-movies" className="navigation-menu__link-item" exact activeClassName="navigation-menu__link-item_active">Сохраненные фильмы</NavLink>
            <div className="navigation-menu__links-container">
              <Link to="/profile"
                    className="navigation-menu__link-item navigation-menu__link-item_account">Аккаунт</Link>
              <Link to="/profile" className="navigation-menu__image-account"/>
            </div>
          </nav>
        </div>
      </div>
      }
    </>
  );
}