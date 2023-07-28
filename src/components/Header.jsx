import React from 'react';
import Search from './Search/index';
import user from '../images/user.png';
import door from '../icons/door.svg';
import profileMenu from '../icons/profile-menu.svg';
import mail from '../icons/mail_menu.svg';
import settings from '../icons/settings_menu.svg';
import services from '../icons/services_menu.svg';
import logout from '../icons/logout_menu.svg';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import menuStar from '../icons/rating_star_icon.svg';
import { removeUser } from '../redux/slices/userSlice';
import { useDispatch} from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
const Header = () => {
  const [openMenu, setOpenMenu] = React.useState(false); // меню профиля
  const menuRef = React.useRef();
  const dispatch = useDispatch();
 
  const handleLogout = async () => {
    try {
      const auth = getAuth();
      await signOut(auth);
      dispatch(removeUser());
    } catch (error) {
      console.log(error);
    }
  };

  React.useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.composedPath().includes(menuRef.current)) {
        setOpenMenu(false);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <>
      <header ref={menuRef} className="header">
        <div className="container">
          <div className="header__wrapper">
            <Link to="/">
              <h3 className="header__logo">PhoresiaNet</h3>
            </Link>
            <nav className="nav">
              <ul className="nav__list">
                <li>
                  <Link className="nav__link" to="/">
                    Главная
                  </Link>
                </li>
                <li>
                  <Link className="nav__link" to="/news">
                    Новости
                  </Link>
                </li>
                <li>
                  <Link className="nav__link" to="/library">
                    Библиотека
                  </Link>
                </li>
                <li>
                  <Link className="nav__link" to="/contacts">
                    Контакты
                  </Link>
                </li>
                <li>
                  <Link className="nav__link" to="/aboutUs">
                    О нас
                  </Link>
                </li>
              </ul>
            </nav>
            <Search  />
          
            <motion.div className="header__profile" whileHover={{ scale: 1.1 }}>
                <button className='header__exit' onClick={handleLogout}>Выйти</button>
              <img className="header__door" src={door} alt="svg" />
              <img
                className="header__user"
                onClick={() => setOpenMenu(!openMenu)}
                src={user}
                alt="avatar"
              
              />

            </motion.div>


            {openMenu  && (
              <div className="nav__menu-wrap">
                <div className="nav__menu">
                  <div className="nav__user">
                    <img className="nav__user-pic" src={user} alt="icon"  />
                    <div className='nav__user-desc'>
                    <h3 className='nav__user-name'>Васильев Егор</h3>
                    
                      <p className='nav__user-average'> 4,8 </p>
                      <img className="nav__user-star" src={menuStar} alt="icon"   />
                      <p className='nav__user-review'> (6 отзывов) </p>
                    </div>
                  </div>
                 

                  <div>
                    <Link className="nav__menu-link" to="/profile">
                      <img src={profileMenu} alt="icon"  />
                      <p>Профиль</p>
                      <span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                    <a href="#" className="nav__menu-link">
                      <img src={mail} alt="icon" />
                      <p>Сообщения</p>
                      <span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                    <Link  className="nav__menu-link" to="/myServices">
                      <img src={services} alt="icon" />
                      <p>Мои услуги</p>
                      <span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </Link>
                    <a href="#" className="nav__menu-link">
                      <img src={settings} alt="icon" />
                      <p>Настройки</p>
                      <span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                    <a href="#" className="nav__menu-link">
                      <img src={logout} alt="icon"/>
                      <p>Выход</p>
                      <span>
                        <i class="fa-solid fa-arrow-right"></i>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
