import "./Movies.css"
import {SearchForm} from "../SearchForm/SearchForm";
import {MoviesCardList} from "../MoviesCardList/MoviesCardList";
import React from "react";
import {NavigationMenu} from "../NavigationMenu/NavigationMenu";

export const Movies = (props) => {

  React.useEffect(() => {
    props.onLoggedIn(true);
    props.onIsCardDelete(false);

    return () => {
      props.onLoggedIn(false)
    }
  })

  return (
    <div className="movies">
      <SearchForm/>
      <MoviesCardList isCardDelete={props.isCardDelete}/>
      <NavigationMenu />
    </div>
  );
}