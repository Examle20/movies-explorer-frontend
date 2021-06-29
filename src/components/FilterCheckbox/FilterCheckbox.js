import "./FilterCheckbox.css"
import React from "react";
export const FilterCheckbox = (props) => {

  const [checked, setChecked] = React.useState(false)

  const handleCheckbox = () => {
    if(!checked) {
      setChecked(true);
      props.onIsSearch(true);
    } else {
      setChecked(false);
      props.onIsSearch(false);
    }
  }

  return (
    <div className="filter">
      <label className="filter__switch">
        <input type="checkbox" className="filter__checkbox" checked={checked} onChange={handleCheckbox} />
        <span className="filter__slider"/>
      </label>
      <p className="filter__title">Короткометражки</p>
    </div>
  )
}