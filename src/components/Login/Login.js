import {EntryForm} from "../EntryForm/EntryForm";
import {Input} from "../Input/Input";
import React from "react";

export const Login = (props) => {

  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  return (
    <>
      <EntryForm
        onHeaderAndFooter={props.onHeaderAndFooter}
        title="Рады видеть!"
        button="Войти"
        switch="Еще не зарегистрированы?"
        link="Регистрация"
        to="signup"
        buttonClass="entry-form__form-button entry-form__form-button_login"
        buttonInactive="entry-form__form-button_inactive"
        children={(
          <>
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
                minLength="2"
                maxLength="30"
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