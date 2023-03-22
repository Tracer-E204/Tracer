import React from 'react';
import NewsItem from './NewsItem';
import styles from './NewsList.module.scss';
import Category from 'components/Common/News/Category';
import { news } from './news';

// 카테고리를 props로 받아옴
export default function NewsList() {
  return (
    <div className={styles['newsList']}>
      <Category />
      {news[0].map(n => (
        <NewsItem key={n.news_reporter} article={n} />
      ))}
    </div>
  );
}
