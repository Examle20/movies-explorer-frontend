import React from "react";
import { Link } from 'react-router-dom'
import {Navigation} from "../Navigation/Navigation";

export const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">
        <Link to="/" className='header__logo'/>
        <Navigation/>
      </div>
    </header>
  );
}

