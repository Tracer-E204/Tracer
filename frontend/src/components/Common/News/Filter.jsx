import React, { useState, useEffect, useRef } from 'react';
import styles from './Filter.module.scss';
import My123 from './MyCalendar';
import xbutton from '../../../assets/images/xxxx.png';
import axios from 'axios';
import Loading from '../../Loading';

export default function Filter({ text, onApply, onDate, startDt, endDt, setIndex }) {
  const [expanded, setExpanded] = useState(false);
  const my123Ref = useRef(null);
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleApply1 = () => {
    setExpanded(false);
  };
  const handleCheck = tf => {
    setCheck(tf);
  };
  const resetDate = async () => {
    setLoading(true);
    onDate(null, null);
    setIndex(true);
    setCheck(true);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/news/search`, {
      word: text,
      limit: 5,
      offset: 0,
      type: 0,
      newsStartDt: null,
      newsEndDt: null,
    });
    onApply(response.data);
    handleApply1();
    setLoading(false);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        expanded &&
        my123Ref.current &&
        !my123Ref.current.contains(event.target) &&
        event.target.id !== 'expand-button'
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
      {loading ? <Loading /> : null}
      <div className={styles.tag}>검색필터</div>
      <div className={styles.searchfilter}>
        <div className={styles.period}>
          <div className={styles.peheader}>
            <div className={styles.title}>기간</div>
            <button id="expand-button" className={styles.plus} onClick={handleExpandClick}>
              +
            </button>
            <div
              ref={my123Ref}
              style={{
                visibility: expanded ? 'visible' : 'hidden',
              }}
            >
              <My123
                onApply1={handleApply1}
                text={text}
                onApply={onApply}
                onDate={onDate}
                setIndex={setIndex}
                check={check}
                handlecheck={handleCheck}
              />
            </div>
          </div>
        </div>
        {startDt && (
          <div className={styles.periodlist}>
            {startDt} ~ {endDt} <img src={xbutton} alt="xx" className={styles.xbuttonimg} onClick={resetDate}></img>
          </div>
        )}
      </div>
    </div>
  );
}
