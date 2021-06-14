import React from "react";
import "./EntryForm.css"
import {Input} from "../Input/Input";
export const EntryForm = (props) => {
  return (
    <div className="entry-form">
      <div className="entry-form__logo"/>
      <h1 className="entry-form__title">{props.title}</h1>
      <form action="" className="entry-form__form">
        {props.children}
        <button type="submit" className="entry-form__form-button">{props.button}</button>
      </form>
      <p className="entry-form__switch">{props.switch}<a href="" className="entry-form__switch-link">{props.link}</a></p>
    </div>
  );
}