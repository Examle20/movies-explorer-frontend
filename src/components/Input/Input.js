import React from "react";
import './Input.css';

export const Input = (props) => {
  const [errorMessage, setErrorMessage] = React.useState('');
  const [isError, setIsError] = React.useState(false)
  const inputClassName = `${props.className} ${isError && "input__error"}`

  const handleChange = (e) => {
    props.onChange(e);
    if(!e.target.validity.valid) {
      setErrorMessage(e.target.validationMessage);
      setIsError(true)
    } else {
      setErrorMessage('')
      setIsError(false)
    }
  }

  return (
    <div className="input">
      <input
        type={props.type}
        className={inputClassName}
        autoComplete="off"
        minLength={props.minLength}
        maxLength={props.maxLength}
        value={props.value}
        onChange={handleChange}
        placeholder={props.placeholder || ''}
        required
      />
      <span className="input__error-text">
        {errorMessage}
      </span>
    </div>
  );
}