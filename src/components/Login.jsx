import React, { useEffect } from 'react';
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';

import { useDispatch } from 'react-redux';
import { setUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';

import Form from './Form';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const auth = getAuth();
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (user) {
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
          })
        );
        navigate('/');
      }
    });

    return () => {
      unsub();
    };
  }, [dispatch, navigate]);
  


   const handleLogin = (email, password) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        user.getIdToken().then((token) => {
          
          dispatch(
            setUser({
              email: user.email,
              id: user.uid,
              token: token,
            }),
          );
          navigate('/');
        });
      })
      .catch(() => alert('Ошибка!'));
  };
  
  

  return <Form title="Вход" handleClick={handleLogin} />;
};

export default Login;
