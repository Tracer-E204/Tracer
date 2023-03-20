import React, { useCallback, useEffect } from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/tracerlogo.png';

export default function Header({ handleClickModalOpen }) {
  const handleScroll = useCallback(() => {
    const header = document.querySelector(`.${styles.header}`);
    if (window.scrollY === 0) {
      header.classList.remove(styles.scroll);
    } else {
      header.classList.add(styles.scroll);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
