import React from 'react';
import styles from './NewsItem.module.scss';
import thumbnail from '../../../assets/images/tracer_thumbnail.png';

export default function NewsItem({ article }) {
  console.log(article);
  return (
    <div className={styles['itemcontainer']}>
      <div className={styles['title-content']}>
        <div className={styles['sub-info']}>
          <div className={styles['press']}>{article.news_press}</div>
          <div classname={styles['time']}>1일 전</div>
        </div>
        <div className={styles['title']}>{article.news_title}</div>
        <div className={styles['content']}>{article.news_content}</div>
      </div>
      <div className={styles['thumbnail']}>
        <img src={article.news_thumbnail} alt="thumb" />
      </div>
    </div>
  );
}
