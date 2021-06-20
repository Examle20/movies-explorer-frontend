import "./NavigationMenu.css"
import { Link } from 'react-router-dom';
export const NavigationMenu = (props) => {

  const closeNavigationMenu = () => {
    props.onNavigationMenu(false)
  }

  return (
    <>{ props.isNavigationMenuOpen &&
      <div className="navigation-menu">
        <div className="navigation-menu__container">
          <button className="navigation-menu__button-close" onClick={closeNavigationMenu}/>
          <nav className="navigation-menu__links">
            <Link to="/" className="navigation-menu__link-item" activeClassName="navigation-menu__link-item_active">Главная</Link>
            <Link to="movies" className="navigation-menu__link-item" activeClassName="navigation-menu__link-item_active">Фильмы</Link>
            <Link to="saved-movies" className="navigation-menu__link-item" activeClassName="navigation-menu__link-item_active">Сохраненные фильмы</Link>
            <div className="navigation-menu__links-container">
              <Link to="profile"
                    className="navigation-menu__link-item navigation-menu__link-item_account">Аккаунт</Link>
              <Link to="profile" className="navigation-menu__image-account"/>
            </div>
          </nav>
        </div>
      </div>
      }
    </>
  );
}