import React from 'react';
import styles from './NewsItem.module.scss';
import thumbnail from '../../../assets/images/tracer_thumbnail.png';

export default function NewsItem({ article }) {
  return (
    <div className={styles.itemcontainer}>
      <div className={styles['title-content']}>
        <div className={styles['sub-info']}>
          <div className={styles.press}>{article.newsPress}</div>
          <div className={styles.time}>1일 전</div>
        </div>
        <div className={styles.title}>{article.newsTitle}</div>
        <div className={styles.content}>{article.newsContent}</div>
      </div>
      <div className={styles.thumbnail}>
        {article.news_thumbnail ? (
          <img src={article.news_thumbnail} alt="thumbnail" />
        ) : (
          <img src={thumbnail} alt="thumbnail" />
        )}
      </div>
    </div>
  );
}
