import React, { useCallback, useEffect } from 'react';
import styles from './Header.module.scss';
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
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}></div>
      </nav>
    </header>
  );
}
