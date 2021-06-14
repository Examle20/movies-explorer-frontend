import React from "react";
import './Input.css';

export const Input = (props) => {
  const [errorMessage, setErrorMessage] = React.useState('');
  return (
    <div className="input">
      <input
        // id={`${props.name}-input`}
        type={props.type}
        className={props.className}
        autoComplete="off"
        // name={props.name}
        // placeholder={props.placeholder}
        // minLength={props.minLength}
        // maxLength={props.maxLength}
        // required
        // autoComplete="off"
        // value={props.value}
        // onChange={handleChange}
        // onPaste={handleChange}
        // contentEditable={true}
      />
      <span className="input__error">
        {errorMessage}
      </span>
    </div>
  );
}