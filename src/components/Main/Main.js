import React from "react";
import { Link } from 'react-router-dom'
import {Header} from "../Header/Header";
import {Promo} from "../Promo/Promo";
import {AboutProject} from "../AboutProject/AboutProject";
import {Techs} from "../Techs/Techs";

export const Main = () => {
  return (
    <>
      <Promo />
      <AboutProject />
      <Techs />
    </>
  );
}