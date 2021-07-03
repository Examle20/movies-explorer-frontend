import "./SearchForm.css"
import {FilterCheckbox} from "../FilterCheckbox/FilterCheckbox";
import React from "react";
export const SearchForm = (props) => {

  const [keyWord, setKeyWord] = React.useState('')

  const handleKeyWord = (e) => {
    setKeyWord(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSearchMovies(keyWord);
    props.onDownloadMovies(0);
  }

  return (
    <section className="search-form">
      <form action="" className="search-form__form" onSubmit={handleSubmit}>
        <input value={keyWord || ''} onChange={handleKeyWord} type="text" className="search-form__input" placeholder="Фильм" required/>
        <button type="submit" className="search-form__button"/>
        <FilterCheckbox
          onIsSearch={props.onIsSearch}
          keyWord={keyWord}
          list={props.list}
          onShortSearch={props.onShortSearch}
          onSetMovies={props.onSetMovies}
          onSearchMovies={props.onSearchMovies}
        />
      </form>
    </section>
  );
}