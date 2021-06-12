import React from "react";
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <header className='header'>
      <div className="header__container">
        <div className='header__logo'/>
        <div className='header__group'>
          <button className='header__link'>Регистрация</button>
          <button className='header__link'>Войти</button>
        </div>
      </div>
    </header>
  );
}

