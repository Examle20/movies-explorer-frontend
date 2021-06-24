import React from "react";
import "./EntryForm.css"
import {Link} from "react-router-dom";

export const EntryForm = (props) => {
  const [buttonDisabled, setButtonDisabled] = React.useState(true)
  const formRef = React.useRef()
  const buttonClassName = `${props.buttonClass} ${buttonDisabled && props.buttonInactive}`

  React.useEffect(() => {
    if(formRef.current && formRef.current.checkValidity()) {
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  })

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
      <form ref={formRef} action="" className="entry-form__form" >
        {props.children}
        <button type="submit" disabled={buttonDisabled} className={buttonClassName}>{props.button}</button>
      </form>
      <p className="entry-form__switch">{props.switch}<Link to={props.to} className="entry-form__switch-link">{props.link}</Link></p>
    </div>
  );
}