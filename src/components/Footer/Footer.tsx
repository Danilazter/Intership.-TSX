import React from 'react';
import styles from './Footer.module.css'

const Footer = () => {
  return (
      <footer>
          <div className={styles.Footer}>
              <div className={styles.text}>
                <a href="tel:+74952342244" className={styles.phone} >8 (495) 234-22-44</a>
                <p className={styles.copyright}>© 2016-2019 «Need for drive»</p>
              </div>
            </div>
    </footer>
  )
}

export default Footer