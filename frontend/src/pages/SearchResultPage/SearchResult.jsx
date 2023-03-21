import React from 'react';
import NewsList from 'components/Common/News/NewsList';
import styles from './SearchResult.module.scss';

export default function SearchResult() {
  return (
    <div className={styles['searchresult']}>
      <NewsList />
    </div>
  );
}
