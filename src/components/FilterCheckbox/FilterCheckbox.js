import "./FilterCheckbox.css"
export const FilterCheckbox = () => {
  return (
    <div className="filter">
      <label className="filter__switch">
        <input type="checkbox" className="filter__checkbox"/>
        <span className="filter__slider"/>
      </label>
      <p className="filter__title">Короткометражки</p>
    </div>
  )
}