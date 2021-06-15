import {EntryForm} from "../EntryForm/EntryForm";
import {Input} from "../Input/Input";
import React from "react";

export const Login = (props) => {
  return (
    <>
      <EntryForm
        onHeaderAndFooter={props.onHeaderAndFooter}
        title="Рады видеть!"
        button="Войти"
        switch="Еще не зарегистрированы?"
        link="Регистрация"
        to="signup"
        children={(
          <>
            <div className="entry-form__form-item">
              <Input type="email" className="entry-form__form-input"/>
              <label className="entry-form__form-label">E-mail</label>
            </div>
            <div className="entry-form__form-item entry-form__form-item_login">
              <Input type="password" className="entry-form__form-input"/>
              <label className="entry-form__form-label">Пароль</label>
            </div>
          </>
        )}
      />
    </>
  );
}