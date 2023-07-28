import React from 'react';
import styles from '../RegisterPage/RegisterPage.module.scss';
import {Link} from 'react-router-dom';
import SignUp from '../../SignUp';
import Background from '../../Background';




const RegisterPage = () => {
  return (
    <>
    <Background/>
    <div className={styles.root}>
    <h2 className={styles.reg}  >Регистрация</h2>
    <SignUp/>
      <p className={styles.account} > У вас уже есть аккаунт? <Link to="/login">Войти</Link></p>
    </div>
    </>
  );
};

export default RegisterPage;
