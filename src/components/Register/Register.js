import {Input} from "../Input/Input";
import React from "react";
import {EntryForm} from "../EntryForm/EntryForm";

export const Register = (props) => {

  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onRegister(name, email, password)
  }

  return (
    <>
      <EntryForm
        onHeaderAndFooter={props.onHeaderAndFooter}
        title="Добро пожаловать!"
        button="Зарегистрироваться"
        switch="Уже зарегистрированы?"
        link="Войти"
        to="signin"
        buttonClass="entry-form__form-button"
        buttonInactive="entry-form__form-button_inactive"
        onHandleButton={handleSubmit}
        children={(
          <>
            <div className="entry-form__form-item">
              <Input
                type="text"
                className="entry-form__form-input"
                minLength="2"
                maxLength="30"
                value={name || ''}
                onChange={handleChangeName}
              />
              <label className="entry-form__form-label">Имя</label>
            </div>
            <div className="entry-form__form-item">
              <Input
                type="email"
                className="entry-form__form-input"
                minLength="2"
                maxLength="30"
                value={email || ''}
                onChange={handleChangeEmail}
              />
              <label className="entry-form__form-label">E-mail</label>
            </div>
            <div className="entry-form__form-item">
              <Input
                type="password"
                className="entry-form__form-input"
                minLength="4"
                maxLength="16"
                value={password || ''}
                onChange={handleChangePassword}
              />
              <label className="entry-form__form-label">Пароль</label>
            </div>
          </>
        )}
      />
    </>
  );
}