import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import NewsList from 'components/Common/News/NewsList';
import styles from './SearchResult.module.scss';
import Filter from 'components/Common/News/Filter';

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
  return (
    <div className={styles.searchresult}>
      <div className={styles['filter-container']}>
        <div>
          "<span>{state.text}</span>"
        </div>
        <div>뉴스 검색 결과 총 {result.totalCount}건입니다</div>
        <Filter
          text={state.text}
          onApply={handleApply}
          onDate={handleDate}
          startDt={startDate}
          endDt={EndDate}
          setIndex={handleIndex}
        />
      </div>
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
