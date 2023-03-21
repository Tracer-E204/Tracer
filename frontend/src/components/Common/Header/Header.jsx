import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/tracerlogo.png';

export default function Header({ handleClickModalOpen }) {
  return (
    <header className={styles['header']}>
      <div className={styles['logo']}>
        <img className={styles['logo-img']} src={logo} alt="logo" />
      </div>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <input className={styles['searchbar']} type="text" placeholder="type keword you want to search" />
        </div>
      </nav>
    </header>
  );
}
