import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { searchNewsList } from 'apis/api/api';
import NewsItem from './NewsItem';
import styles from './NewsList.module.scss';
import Category from 'components/Common/News/Category';
import { news } from './news';

// 카테고리를 props로 받아옴
export default function NewsList() {
  const params = JSON.stringify({
    word: '러시아',
    limit: 5,
    offset: 0,
  });
  const { data, isLoading } = useQuery({
    queryKey: ['newsList'],
    queryFn: () => searchNewsList(params),
  });

  if (isLoading) return;

  // console.log(data);

  return (
    <div className={styles['newsList']}>
      {/* <Category />
      {data.map(n => (
        <NewsItem key={n.news_reporter} article={n} />
      ))} */}
    </div>
  );
}
