import "./SearchForm.css"
import {FilterCheckbox} from "../FilterCheckbox/FilterCheckbox";
import React from "react";
import * as handleMovies from "../../utils/handleMovies"
export const SearchForm = (props) => {

  const [keyWord, setKeyWord] = React.useState('')

  const handleKeyWord = (e) => {
    setKeyWord(e.target.value)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    handleMovies.checkFilms(props.storageItem, props.onGetMovies);
    props.setMovies(handleMovies.searchFilms(props.storageItem, keyWord));
  }

  const handleShortSearch = () => {
    handleMovies.checkFilms(props.storageItem, props.onGetMovies);
    props.setMovies(handleMovies.searchShortFilms(props.storageItem));
  }

  return (
    <section className="search-form">
      <form action="" className="search-form__form" onSubmit={handleSearch}>
        <input value={keyWord || ''} onChange={handleKeyWord} type="text" className="search-form__input" placeholder="Фильм" required/>
        <button type="submit" className="search-form__button"/>
        <FilterCheckbox
          onSort={handleShortSearch}
          onMovies={props.setMovies}
        />
      </form>
    </section>
  );
}