import React from 'react';
import star from '../../icons/rating_star_icon.svg';
import { motion } from 'framer-motion';
import ModalMessage from '../ModalMessage';
import axios from 'axios';
import Skeleton from '../Skeleton';
import Pagination from '../Pagination';
import {  useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom'
import {useAuth} from '../hooks/use-auth'





const Main = () => {
 
  const {isAuth} = useAuth()
  const [openMessage, setOpenMessage] = React.useState(false); // сообщение
  const [users, setUsers] = React.useState([]); // пользователи
  const [currentPage, setCurrentPage] = React.useState(1); // страница ( пагинация )
  const [selectedUser, setSelectedUser] = React.useState(null); // выбор конкретного профиля при нажатии кнопки
  const [isLoading, setIsLoading] = React.useState(true); //загрузка (скелет)
  const searchValue = useSelector((state) => state.search.searchValue); //поисковик
  React.useEffect(() => {
    setIsLoading(true);

    const search = searchValue ? `&search=${searchValue}` : '';

    axios
      .get(`https://648c4b4b8620b8bae7eca01a.mockapi.io/user?page=${currentPage}&limit=4&${search}`)
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      });
  }, [searchValue, currentPage]);

  //функция модального окна при нажатии кнопки
  const handleOpenMessage = (obj) => {
    window.scrollTo(0, 0);
    setSelectedUser(obj);
    setOpenMessage(true);
  };
  //поисковик


//авторизация isAuth
  return isAuth ? (
     
    <>
      
      <div className="main">
        <div className="container">
        
          <h2 className="main__chapter">Главная</h2>

          <div className="main__wrapper">
            {isLoading
              ? [...new Array(6)].map(() => <Skeleton />)
              : users.map((obj) => (
                  <div className="main__cart">
                    <div className="main__ad">Заказчик</div>

                    <img className="main__avatar" src={obj.avatarUrl} alt="avatarMan" />

                    <p className="main__name"> {obj.name} </p>
                    <p className="main__city"> {obj.city}</p>
                    <div className="main__rating">
                      <p className="main__grade">4,3</p>
                      <img className="main__star" src={star} alt="star" />
                    </div>
                    <p className="main__text">{obj.announcement}</p>

                    <motion.button
                      className="main__btn"
                      onClick={() => handleOpenMessage(obj)}
                      whileHover={{ scale: 1.1, color: 'green' }}>
                      Написать
                    </motion.button>
                  </div>
                ))}
          </div>
        </div>
      </div>  : 
      {openMessage && ( 
        <ModalMessage
          key={selectedUser.id}
          id={selectedUser.id}
          name={selectedUser.name}
          city={selectedUser.city}
          avatarUrl={selectedUser.avatarUrl}
          setOpenMessage={setOpenMessage}
        />
      )}
      <Pagination onChangePage={(number) => setCurrentPage(number)} />
      
    </>
  )
   : ( 
    <Navigate to="/login"/>
  )
  
};

export default Main;
