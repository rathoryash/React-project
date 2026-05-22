import React from 'react'
import styles from './Navigation.module.css';


const Navigation = () => {
  console.log(styles);
  return (
    <nav className={`${styles.nav} container`}>
        <div className='logo'>
            <img src="/images/logo.png" alt="Logo" />
        </div>
        <ul >
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
  )
}

export default Navigation