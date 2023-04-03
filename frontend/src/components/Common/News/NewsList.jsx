import React, { useState, useEffect } from 'react';
import NewsItem from './NewsItem';
import styles from './NewsList.module.scss';
import Category from 'components/Common/News/Category';
import { Pagination } from '@mui/material';
import axios from 'axios';

// 카테고리를 props로 받아옴
export default function NewsList({ result, text }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [newsResult, setNewsResult] = useState(result);
  const [type, setType] = useState(0);

  useEffect(() => {
    setNewsResult(result);
  }, [result]);

  const handleTypeChange = async newType => {
    setType(newType);
    setCurrentPage(1);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/search`, {
      word: text,
      limit: 5,
      offset: 0,
      type: newType,
    });
    setNewsResult(response.data);
  };

  const handleChange = async (event, value) => {
    setCurrentPage(value);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/news/search`, {
      word: text,
      limit: 5,
      offset: value - 1,
      type: type,
    });
    setNewsResult(response.data);
  };
  return (
    <div className={styles.newsList}>
      <Category onTypeChange={handleTypeChange} />
      {newsResult.list.map(n => (
        <NewsItem key={n.newsId} article={n} />
      ))}
      <div className={styles.pages}>
        <Pagination
          count={newsResult.totalPage}
          page={currentPage}
          onChange={handleChange}
          size="large"
          showFirstButton
          showLastButton
        />
      </div>
    </div>
  );
}
