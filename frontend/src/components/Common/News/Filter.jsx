import React from 'react';
import styles from './Filter.module.scss';

export default function Filter() {
  return (
    <div className={styles['filter-container']}>
      <div className={styles['tag']}>검색필터</div>
      <div className={styles['searchfilter']}>
        <div className={styles['period']}>
          <div className={styles['pe-header']}>
            <div className={styles['title']}>기간</div>
            <button className={styles['plus']}>+</button>
          </div>
          {/* mapping  */}
          <div className={styles['period-list']}>data</div>
        </div>
        <div className={styles['press']}>
          <div className={styles['pe-header']}>
            <div className={styles['title']}>언론사</div>
            <button className={styles['plus']}>+</button>
          </div>
          {/* mapping  */}
          <div className={styles['period-list']}>data</div>
        </div>
      </div>
    </div>
  );
}
