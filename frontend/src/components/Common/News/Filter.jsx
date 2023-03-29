import React, { useState } from 'react';
import styles from './Filter.module.scss';
import MyCalendar from './MyCalendar';

export default function Filter() {
  const [expanded, setExpanded] = useState(false);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className={styles['filter-container']}>
      <div className={styles['tag']}>검색필터</div>
      <div className={styles['searchfilter']}>
        <div className={styles['period']}>
          <div className={styles['pe-header']}>
            <div className={styles['title']}>기간</div>
            <button className={styles['plus']} onClick={handleExpandClick}>
              +
            </button>
            <div
              style={{
                visibility: expanded ? 'visible' : 'hidden',
              }}
            >
              <MyCalendar />
            </div>
          </div>
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
