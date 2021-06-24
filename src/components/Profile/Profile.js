// import "./Profile.css"
// import {Input} from "../Input/Input";
// import React from "react";
// import {Link} from "react-router-dom";
//
// export const Profile = (props) => {
//
//   React.useEffect(() => {
//     props.onLoggedIn(true)
//     props.onIsFooterOpen(false)
//     return () => {
//       props.onLoggedIn(false)
//       props.onIsFooterOpen(true)
//     }
//   })
//
//   return (
//     <div className="profile">
//       <h1 className="profile__title">Привет, Виталий!</h1>
//       <form action="" className="profile__form">
//         <div className="profile__form-item">
//           <Input
//             type="text"
//             className="profile__form-input"
//             minLength="2"
//             maxLength="30"
//           />
//           <label className="profile__form-label">Имя</label>
//         </div>
//         <div className="profile__form-item">
//           <Input
//             type="email"
//             className="profile__form-input"
//             minLength="2"
//             maxLength="30"
//           />
//           <label className="profile__form-label">E-mail</label>
//         </div>
//         <button className="profile__form-button">Редактировать</button>
//       </form>
//       <Link to="/signin" className="profile__link-out">Выйти из аккаунта</Link>
//     </div>
//   );
// }