import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/tracerlogo.png';

export default function Header() {
  return (
    <header className={styles['header']}>
      <div className={styles['logo']}>
        <img className={styles['logo-img']} src={logo} alt="logo" />
      </div>
      <input className={styles['searchbar']} type="text" placeholder="type keword you want to search" />
    </header>
  );
}
