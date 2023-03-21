import React from 'react';
import NewsList from 'components/Common/News/NewsList';
import styles from './SearchResult.module.scss';
import Filter from 'components/Common/News/Filter';

export default function SearchResult() {
  return (
    <div className={styles['searchresult']}>
      <Filter />
      <NewsList />
    </div>
  );
}
