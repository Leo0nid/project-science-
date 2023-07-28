import React from 'react';
import styles from '../Form/Form.module.scss'

const Form = ({title,handleClick}) => {
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');


  

  return (
    <div className={styles.root} >
      <input className={styles.input}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Введите почту.."
       />
      <input className={styles.input}
        type="password" 
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Введите пароль.."
      />
      <button className={styles.button}
        onClick={() => handleClick(email,pass)}
      >
        {title}
      </button>
    </div>
  );
};

export default Form;
