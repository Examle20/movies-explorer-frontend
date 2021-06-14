import React from "react";
import "./EntryForm.css"
import {Link} from "react-router-dom";

export const EntryForm = (props) => {

  React.useEffect(() => {
    props.onHeaderAndFooter(false)

    return ()=> {
      props.onHeaderAndFooter(true)
    }
  })
  return (
    <div className="entry-form">
      <Link to="/" className="entry-form__logo"/>
      <h1 className="entry-form__title">{props.title}</h1>
      <form action="" className="entry-form__form">
        {props.children}
        <button type="submit" className="entry-form__form-button">{props.button}</button>
      </form>
      <p className="entry-form__switch">{props.switch}<a href="" className="entry-form__switch-link">{props.link}</a></p>
    </div>
  );
}