import {Input} from "../Input/Input";
import React from "react";
import {EntryForm} from "../EntryForm/EntryForm";

export const Register = (props) => {
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
        children={(
          <>
            <div className="entry-form__form-item">
              <Input
                type="text"
                className="entry-form__form-input"
                minLength="2"
                maxLength="30"
              />
              <label className="entry-form__form-label">Имя</label>
            </div>
            <div className="entry-form__form-item">
              <Input
                type="email"
                className="entry-form__form-input"
                minLength="2"
                maxLength="30"
              />
              <label className="entry-form__form-label">E-mail</label>
            </div>
            <div className="entry-form__form-item">
              <Input
                type="password"
                className="entry-form__form-input"
                minLength="4"
                maxLength="16"
              />
              <label className="entry-form__form-label">Пароль</label>
            </div>
          </>
        )}
      />
    </>
  );
}