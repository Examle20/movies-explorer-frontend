import "./SearchForm.css"
import {FilterCheckbox} from "../FilterCheckbox/FilterCheckbox";
import React from "react";
import * as handleMovies from "../../utils/handleMovies"
export const SearchForm = (props) => {

  const [keyWord, setKeyWord] = React.useState('')

  const handleKeyWord = (e) => {
    setKeyWord(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearchMovies(keyWord);
  }

  return (
    <section className="search-form">
      <form action="" className="search-form__form" onSubmit={handleSubmit}>
        <input value={keyWord || ''} onChange={handleKeyWord} type="text" className="search-form__input" placeholder="Фильм" required/>
        <button type="submit" className="search-form__button"/>
        <FilterCheckbox
          onIsSearch={props.onIsSearch}
          onMovies={props.setMovies}
        />
      </form>
    </section>
  );
}