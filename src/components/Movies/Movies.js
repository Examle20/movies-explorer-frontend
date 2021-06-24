import "./Movies.css"
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import React from "react";
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";

export const Movies = (props) => {

  React.useEffect(() => {

  })

  return (
    <div className="movies">
      <SearchForm/>
      <MoviesCardList isCardDelete={props.isCardDelete} amount={12}/>
      <NavigationMenu />
    </div>
  );
}