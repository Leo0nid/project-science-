import React from 'react';
import close from '../icons/close_icon.svg';


const modalMessage = ({setOpenMessage,name,avatarUrl,city}) => {
  return (
    <>
    
      <div className="modalMessage">
        <div className="modalMessage__back"></div>

        <form className="modalMessage__form" >
          <div className="modalMessage__profile">
            <img className="modalMessage__avatar" src={avatarUrl} alt="avatarMan" />

            <p className="modalMessage__name"> {name} </p>
            <p className="modalMessage__city"> {city}</p>
            <img className="modalMessage__close" onClick={() => setOpenMessage(false)} src={close} />
          </div>
          <textarea
            className="modalMessage__textarea"
            placeholder="Введите ваше сообщение.."></textarea>
          <button className="modalMessage__button">Отправить</button>
        </form>
      </div>
  
    </>
    
  );
};

export default modalMessage;
