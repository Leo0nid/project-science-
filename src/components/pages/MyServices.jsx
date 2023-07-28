import React from 'react';
import avatar1 from '../../icons/avatar_man.svg';
import star from '../../icons/rating_star_icon.svg'

const MyServices = () => {
  return (
    <div>
      <div className="myServices">
        <div className="container">
          <h2 className="myServices__chapter"> Мои услуги </h2>
          <div className="myServices__wrapper">
            <form className="myServices__form" >
              <h3 className="myServices__toAdd">Описание</h3>
              <textarea
                className="myServices__text"
                name="comment"
                cols="79"
                rows="15"
                placeholder="Куплю.."
              />
              <div className="myServices__wrapper-input">
                <input className="myServices__submit" type="submit" value="Добавить" />
                <input className="myServices__reset" type="reset" value="Очистить" />
              </div>
            </form>

            <div className="myServices__block">
              <h3 className="myServices__toAdd-status">Статус</h3>    
              <div className="myServices__cart">
              <p className='myServices__status'>Выполнен</p>
                <div className="myServices__profile">
                  <div className="myServices__img">
                  <img src={avatar1} alt="avatar" />
                  </div>
                    <p className="myServices__name"> Иванов И.</p>
                    <div className="myServices__rating">
                      <p className="myServices__grade">4,6</p>
                      <img className="myServices__star" src={star} alt="star" />
                    </div>
                 
                </div>
          
                <p className='myServices__message'>Огромное спасибо за качественный товар, за оперативность и честность!!</p>
             <button className='myServices__open'>Открыть</button>
              </div>
           
               <div className="myServices__cart">
               <p className='myServices__status-cancel'>Отказ</p>
                <div className="myServices__profile">
                  <div className="myServices__img">
                  <img src="https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/grandma_elderly_nanny_avatar-256.png" alt="avatar"/>
                  </div>
                    <p className="myServices__name"> Мария И.</p>
                    <div className="myServices__rating">
                      <p className="myServices__grade">4,6</p>
                      <img className="myServices__star" src={star} alt="star" />
                    </div>
                 
                </div>
          
                <p className='myServices__message'>Извините. Уже не актуально</p>
             <button className='myServices__open'>Открыть</button>
              </div>

                  <div className="myServices__cart">
              <p className='myServices__status'>Выполнен</p>
                <div className="myServices__profile">
                  <div className="myServices__img">
                  <img src='https://cdn1.iconfinder.com/data/icons/user-pictures/101/malecostume-256.png' alt="avatar" />
                  </div>
                    <p className="myServices__name"> Геннадий Б</p>
                    <div className="myServices__rating">
                      <p className="myServices__grade">4,3</p>
                      <img className="myServices__star" src={star} alt="star" />
                    </div>
                 
                </div>
          
                <p className='myServices__message'>Все сделали в срок! Спасибо!</p>
             <button className='myServices__open'>Открыть</button>
              </div>
              <div className="myServices__cart">
              <p className='myServices__status'>Выполнен</p>
                <div className="myServices__profile">
                  <div className="myServices__img">
                    <img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/man_male_avatar_portrait-512.png' alt="avatar" />
                  </div>
                    <p className="myServices__name"> Васильев А.</p>
                    <div className="myServices__rating">
                      <p className="myServices__grade">4,3</p>
                      <img className="myServices__star" src={star} alt="star" />
                    </div>
                 
                </div>
          
                <p className='myServices__message'> Быстро и четко! </p>
             <button className='myServices__open'>Открыть</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyServices;
