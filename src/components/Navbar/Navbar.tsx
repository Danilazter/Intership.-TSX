import React, { FC, useState } from 'react';
import Menu from '../Menu/Menu';
import styles from './Navbar.module.css';

const Navbar: FC = () => {
  
  // change burger //

  const [burger, setBurger] = useState("burger unclicked")
  const [menu, setMenu] = useState("menu hidden")
  const [isMenuClicked, setIsMenuClicked] = useState(false)

  // burger menu change //
  
  const updateMenu = () => {
    if (!isMenuClicked) {
      setBurger("burger clicked")
      setMenu("menu visible")
    }
    else {
      setBurger("burger unclicked")
      setMenu("menu hidden")
    }
    setIsMenuClicked(!isMenuClicked)
  }

  return (
    <div className={styles.Navbar}>
      <div className={styles.burgerMenu} onClick={updateMenu}>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
        <div className={styles.burger}></div>
      </div>
      {/* <Menu /> */}
    </div>
    
  )
}

export default Navbar;