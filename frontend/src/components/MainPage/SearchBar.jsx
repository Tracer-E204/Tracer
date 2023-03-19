import React from 'react';
import styles from './SearchBar.module.scss';

export default function SearchBar() {
  return (
    <div className={styles['searchbar-container']}>
      <input type="text" placeholder="찾고싶은 주제를 입력" />
    </div>
  );
}
