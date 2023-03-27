import React from 'react';
import styles from './SearchPage.module.scss';
import SearchBar from 'components/Common/SearchBar';
import video from './assets/SearchPageBackground.mp4';

export default function SearchPage() {
  return (
    <div className={styles['searchbar-container']}>
      <video autoPlay muted>
        <source src={video} type="video/mp4" />
      </video>
      <div className={styles['search-component']}>
        <h1> 관심있는 키워드를 검색하고 </h1>
        <h3> 뉴스의 흐름을 알아보세요! </h3>
        <SearchBar className={styles['searchbar']} />
      </div>
    </div>
  );
}
