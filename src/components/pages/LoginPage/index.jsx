import React from 'react';
import styles from '../LoginPage/LoginPage.module.scss';
import { Link } from 'react-router-dom';
import Login from '../../Login';
import Background from '../../Background';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
 
    
  

  return (
    <>
      <Background />
      <div className={styles.root}>
        <h2 className={styles.welcome}>Добро пожаловать!</h2>
        <Login />

        <p>
          <Link className={styles.register} to="/register">
            Регистрация
          </Link>
        </p>
      </div>
    </>
  );
};

export default LoginPage;
