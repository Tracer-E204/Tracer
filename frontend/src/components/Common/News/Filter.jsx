import React, { useState, useEffect, useRef } from 'react';
import styles from './Filter.module.scss';
import My123 from './MyCalendar';

export default function Filter() {
  const [expanded, setExpanded] = useState(false);
  const my123Ref = useRef(null);
  const handleApply = () => {
    setExpanded(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        expanded &&
        my123Ref.current &&
        !my123Ref.current.contains(event.target) &&
        !event.target.classList.contains('Filter_plus__vT9hn')
      ) {
        setExpanded(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [expanded, my123Ref]);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <div className={styles['filter-container']}>
      <div className={styles.tag}>검색필터</div>
      <div className={styles.searchfilter}>
        <div className={styles.period}>
          <div className={styles.peheader}>
            <div className={styles.title}>기간</div>
            <button className={styles.plus} onClick={handleExpandClick}>
              +
            </button>
            <div
              ref={my123Ref}
              style={{
                visibility: expanded ? 'visible' : 'hidden',
              }}
            >
              <My123 onApply={handleApply} />
            </div>
          </div>
        </div>
        <div className={styles.press}>
          <div className={styles.peheader}>
            <div className={styles.title}>언론사</div>
            <button className={styles.plus}>+</button>
          </div>
          {/* mapping  */}
          <div className={styles.periodlist}>data</div>
        </div>
      </div>
    </div>
  );
}
