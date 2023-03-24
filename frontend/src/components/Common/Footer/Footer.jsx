import React from 'react';
import Container from 'containers/Container';
import styles from './Footer.module.scss';
import { Link } from 'react-router-dom';
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <Container></Container>
    </footer>
  );
}
