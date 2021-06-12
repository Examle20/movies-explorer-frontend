import {SectionTitle} from "../SectionTitle/SectionTitle";
import "./Movies.css"
import {SearchForm} from "../SearchForm/SearchForm";
import {FilterCheckbox} from "../FilterCheckbox/FilterCheckbox";
export const Movies = () => {
  return (
    <div className="movies">
      <SearchForm/>
    </div>
  );
}