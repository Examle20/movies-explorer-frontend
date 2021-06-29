import React from "react";
import "./InfoTooltip.css"

function InfoTooltip(props) {
  const classNameOpen = props.isOpen ? 'popup_visible' : '';
  React.useEffect(() => {

  },[])
  return(
    <div className={`popup  ${classNameOpen}`}>
      <div className="popup__container popup_notification">
        <button type="button" className="popup__button-close" aria-label="Закрыть" onClick={props.onClose}/>
        <h2 className="popup__title popup__title_notification">{props.message}</h2>
      </div>
    </div>
  )
}

export default InfoTooltip;