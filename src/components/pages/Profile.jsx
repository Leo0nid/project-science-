import React from 'react';
import user from '../../images/mask.jpg';

const Profile = () => {
  return (
    <div>
      <div className="profile">
        <div className="container">
          <div className="profile__chapter"> Мой профиль </div>
          <div className="profile__wrapper">
            <div className="profile__avatar">
              <div className="profile__image">
                <img src={user} alt="avatar" />
              </div>
              <div class="rate">
                <input type="radio" id="star5" name="rate" value="5" />
                <label for="star5" title="text">
                  5 stars
                </label>
                <input type="radio" id="star4" name="rate" value="4" />
                <label for="star4" title="text">
                  4 stars
                </label>
                <input type="radio" id="star3" name="rate" value="3" />
                <label for="star3" title="text">
                  3 stars
                </label>
                <input type="radio" id="star2" name="rate" value="2" />
                <label for="star2" title="text">
                  2 stars
                </label>
                <input type="radio" id="star1" name="rate" value="1" />
                <label for="star1" title="text">
                  1 star
                </label>
              </div>
            </div>
            <form className='profile__form' >
              <label  for="name">Введите имя и фамилию :</label>
              <input className="profile__name-input"  type="text" id="name" placeholder="Васильев Егор" />
              <label className='profile__interest' for="name">Интересы :
               <textarea
               className="profile__interest-text"
               name="interest"
               
               placeholder="Ракетостроение , физика"
               />
               </label>
               <label className='profile__gender'>  Ваш пол:
               <label>
                <input className='profile__gender-input' type="radio" name="gender" value="" /> Мужской
              </label>
              <label>
                <input className='profile__gender-input' type="radio" name="gender" value="" checked /> Женский
              </label>
              </label>
              <br />
              <label className='profile__month'>
              Месяц и год рождения:
              <br />
              <select>
                <option>Январь</option>
                <option>Февраль</option>
                <option>Март</option>
                <option>Апрель</option>
              </select>
              <select>
                <option>1990</option>
                <option>1989</option>
                <option>1988</option>
              </select>
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
