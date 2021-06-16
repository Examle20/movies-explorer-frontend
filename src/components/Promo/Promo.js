import React from "react";
import { Link } from 'react-router-dom'
import {Header} from "../Header/Header";

export const Promo = () => {
  return (
    <section className='promo'>
      <div className="promo__container">
        <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
        <p className="promo__text">Листайте ниже, чтобы узнать больше про этот проект и его создателя.</p>
        <a className="promo__link" href="#about">Узнать больше</a>
      </div>
      <div className="promo__image"/>
    </section>
  );
}