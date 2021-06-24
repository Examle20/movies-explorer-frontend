import "./Profile.css"
import {Input} from "../Input/Input";
import React from "react";
import {Link} from "react-router-dom";
import {CurrentUserContext} from "../../contexts/currentUserContext";

export const Profile = (props) => {

  const [buttonDisabled, setButtonDisabled] = React.useState(true)
  const formRef = React.useRef();
  const currentUser = React.useContext(CurrentUserContext);
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')

  const buttonSubmitClass = `profile__form-button ${buttonDisabled && "profile__form-button_inactive"}`
  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onUpdateUser(name, email)
  }

  React.useEffect(() => {
    if(formRef.current && formRef.current.checkValidity()
      && name !== currentUser.name && email !== currentUser.email) {
      setButtonDisabled(false);
    }else{
      setButtonDisabled(true);
    }
  })

  React.useEffect(() => {
    props.onIsFooterOpen(false)
    return () => {
      props.onIsFooterOpen(true)
    }
  },[])

  return (
    <div className="profile">
      <h1 className="profile__title">{`Привет, ${currentUser.name}`}</h1>
      <form ref={formRef} action="" className="profile__form">
        <div className="profile__form-item">
          <Input
            type="text"
            className="profile__form-input"
            minLength="2"
            maxLength="30"
            value={name || ''}
            onChange={handleChangeName}
          />
          <label className="profile__form-label">Имя</label>
        </div>
        <div className="profile__form-item">
          <Input
            type="email"
            className="profile__form-input"
            minLength="2"
            maxLength="30"
            value={email || ''}
            onChange={handleChangeEmail}
          />
          <label className="profile__form-label">E-mail</label>
        </div>
        <button
          className={buttonSubmitClass}
          onClick={handleSubmit}
          disabled={buttonDisabled}>Редактировать</button>
      </form>
      <button className="profile__link-out" onClick={props.onSignout}>Выйти из аккаунта</button>
    </div>
  );
}