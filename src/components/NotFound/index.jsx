import React from 'react'
import styles from './NotFound.module.scss'

const NotFound = () => {
  return (
    <div className={styles.root}>
      <h2 >
      <span>😕</span> 
      <br/>
      Ничего не найдено
      </h2>
      <p className={styles.description}>К сожалению данная страница отсутствует</p>
    </div>
  )
}

export default NotFound