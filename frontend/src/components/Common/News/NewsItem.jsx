import React from 'react';
import styles from './NewsItem.module.scss';
import thumbnail from '../../../assets/images/tracer_thumbnail.png';

export default function NewsItem({ article }) {
  return (
    <div className={styles['itemcontainer']}>
      <div className={styles['title-content']}>
        <div className={styles['sub-info']}>
          <div className={styles['press']}>형규뉴스</div>
          <div classname={styles['time']}>1일 전</div>
        </div>
        <div className={styles['title']}>{article.title}</div>
        <div className={styles['content']}>{article.content}</div>
      </div>
      <div className={styles['thumbnail']}>
        <img src={thumbnail} alt="thumb" />
      </div>
    </div>
  );
}
