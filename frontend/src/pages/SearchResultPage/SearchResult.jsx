import React from 'react';
import { useLocation } from 'react-router-dom';
import NewsList from 'components/Common/News/NewsList';
import styles from './SearchResult.module.scss';
import Filter from 'components/Common/News/Filter';

export default function SearchResult() {
  const location = useLocation();
  const { result } = location.state;
  window.scrollTo(0, 0);
  return (
    <div className={styles.searchresult}>
      <Filter />
      <NewsList result={result} />
    </div>
  );
}
