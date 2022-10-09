import React from 'react';
import styles from './Button.module.css';


const Button = () => {
  return (
    <div className={styles.buttonBlock}>
      <button className={styles.button}>Забронировать</button>
      </div>
  )
}

export default Button;