import React from "react";
import { Link } from 'react-router-dom'
import {Navigation} from "../Navigation/Navigation";
import "./Header.css"

export const Header = (props) => {
  return (
    <header className={`header ${props.isHeaderMain && "header_main"}`}>
      <div className="header__container">
        <Link to="/" className='header__logo'/>
        <Navigation
          loggedIn={props.loggedIn}
          onNavigationMenu={props.onNavigationMenu}
        />
      </div>
    </header>
  );
}

