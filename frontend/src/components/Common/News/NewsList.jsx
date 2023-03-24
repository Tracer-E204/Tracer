import React from 'react';
import NewsItem from './NewsItem';
import styles from './NewsList.module.scss';
import Category from 'components/Common/News/Category';

// 카테고리를 props로 받아옴
export default function NewsList({ result }) {
  return (
    <div className={styles.newsList}>
      <Category />
      {result.list.map(n => (
        <NewsItem key={n.newsReporter} article={n} />
      ))}
    </div>
  );
}
