import React from 'react';
import styles from './Header.module.scss';
import logo from '../../../assets/tracerlogo.png';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();

  const Gomain = () => {
    navigate('/');
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles['logo-img']} src={logo} alt="logo" onClick={Gomain} />
      </div>
      <input className={styles.searchbar} type="text" placeholder="type keword you want to search" />
    </header>
  );
}
