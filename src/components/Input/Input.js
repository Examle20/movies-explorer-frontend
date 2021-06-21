import React from "react";
import './Input.css';

export const Input = (props) => {
  const [errorMessage, setErrorMessage] = React.useState('');
  return (
    <div className="input">
      <input
        type={props.type}
        className={props.className}
        autoComplete="off"
        minLength={props.minLength}
        maxLength={props.maxLength}
        required
      />
      <span className="input__error">
        {errorMessage}
      </span>
    </div>
  );
}