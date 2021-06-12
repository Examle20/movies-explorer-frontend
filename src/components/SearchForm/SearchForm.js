import "./SearchForm.css"
import {FilterCheckbox} from "../FilterCheckbox/FilterCheckbox";

export const SearchForm = () => {
  return (
    <section className="search-form">
      <form action="" className="search-form__form">
        <input type="text" className="search-form__input" placeholder="Фильм"/>
        <button  className="search-form__button"/>
        <FilterCheckbox/>
      </form>
    </section>
  );
}