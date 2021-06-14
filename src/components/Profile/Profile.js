import "./Profile.css"
import {Input} from "../Input/Input";

export const Profile = () => {
  return (
    <div className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form action="" className="profile__form">
        <div className="profile__form-item">
          <Input type="text" className="profile__form-input"/>
          <label className="profile__form-label">Имя</label>
        </div>
        <div className="profile__form-item">
          <Input type="email" className="profile__form-input"/>
          <label className="profile__form-label">E-mail</label>
        </div>
        <button className="profile__form-button">Редактировать</button>
      </form>
      <a href="" className="profile__link-out">Выйти из аккаунта</a>
    </div>
  );
}