import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewsList from 'components/Common/News/NewsList';
import styles from './SearchResult.module.scss';
import Filter from 'components/Common/News/Filter';
import fail from '../../assets/images/fail.png';

export default function SearchResult() {
  const location = useLocation();
  const { state } = location;
  const [result, setResult] = useState(null);
  const [startDate, setStartDt] = useState(null);
  const [EndDate, setEndDt] = useState(null);
  const [index, setIndex] = useState(false);
  const handleDate = (startDate, EndDate) => {
    setStartDt(startDate);
    setEndDt(EndDate);
  };
  const handleApply = data => {
    setResult(data);
  };
  if (result === null) {
    setResult(state.result);
    setStartDt(state.startDate);
    setEndDt(state.EndDate);
  }
  window.scrollTo(0, 0);
  const handleIndex = tf => {
    setIndex(tf);
  };
  if (result && result.totalCount === 0) {
    return (
      <div className={styles.searchresult}>
        <img src={fail} alt="fail" style={{ margin: 'auto', paddingTop: '3%', width: '60vw', maxHeight: '70vh' }}></img>
      </div>
    );
  }

  // 검색 결과가 0이 아니면 Filter와 NewsList 출력
  return (
    <div className={styles.searchresult}>
      <Filter
        text={state.text}
        onApply={handleApply}
        onDate={handleDate}
        startDt={startDate}
        endDt={EndDate}
        setIndex={handleIndex}
        result={result}
      />
      <NewsList
        result={result}
        text={state.text}
        startDt={startDate}
        endDt={EndDate}
        index={index}
        setIndex={handleIndex}
      />
    </div>
  );
}
