import React from 'react';
import NewsList from 'components/Common/News/NewsList';
import Category from 'components/Common/News/Category';
import styles from './SearchResult.module.scss';

export default function SearchResult() {
  return (
    <div className={styles['searchresult']}>
      <Category />
      <NewsList />
    </div>
  );
}
