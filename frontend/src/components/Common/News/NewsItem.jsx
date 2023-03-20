import React from 'react';
import styles from './NewsItem.module.scss';

export default function NewsItem({ article }) {
  return (
    <div className={styles['itemcontainer']}>
      <div className={styles['title-content']}>
        <div className={styles['title']}>{article.title}</div>
        <div className={styles['content']}>{article.content}</div>
      </div>
      <div className={styles['thumbnail']}>thumbnail </div>
    </div>
  );
}
