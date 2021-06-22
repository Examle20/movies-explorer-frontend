import "./NotFound.css"
import React from "react";
import { useParams, useHistory } from 'react-router-dom';
export const NotFound = (props) => {

  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  React.useEffect(() => {
    props.onIsHeaderAndFooter(false);
    return () => {
      props.onIsHeaderAndFooter(true);
    }
  })

  return (
    <div className="not-found">
      <h1 className="not-found__error">404</h1>
      <p className="not-found__subtitle">Страница не найдена</p>
      <button className="not-found__link" onClick={goBack}>Назад</button>
    </div>
  );
}