import React from 'react';
import styles from './SearchBar.module.scss';
import SearchBar from 'components/Common/SearchBar';

export default function SearchPage() {
  return (
    <div className={styles['searchbar-container']}>
      <SearchBar />
    </div>
  );
}
