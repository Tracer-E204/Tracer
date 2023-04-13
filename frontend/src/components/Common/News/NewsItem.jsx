import React, { useState } from 'react';
import styles from './NewsItem.module.scss';
import thumbnail from '../../../assets/images/tracer_thumbnail.png';
import ArticleModal from '../../Article/ArticleModal';
import styles1 from '../../Article/ArticleModal.module.scss';

export default function NewsItem({ article, navigate }) {
  const [modalOpen, setModalOpen] = useState(false);
  const ModalOpen = () => {
    setModalOpen(true);
  };
  const get_time = (date, time) => {
    const dateArr = [...date.split('-'), ...time.split(':')];
    const date1 = dateArr.map(str => parseInt(str));
    const now = new Date();
    const then = new Date(date1[0], date1[1] - 1, date1[2], date1[3], date1[4], date1[5]);
    const diffInMs = now.getTime() - then.getTime();
    const weekInMs = 7 * 24 * 60 * 60 * 1000;
    const dayInMs = 24 * 60 * 60 * 1000;
    const hourInMs = 60 * 60 * 1000;
    const minuteInMs = 60 * 1000;
    if (weekInMs >= diffInMs >= dayInMs) {
      return `${Math.floor(diffInMs / dayInMs)}일 전`;
    } else if (dayInMs >= diffInMs >= hourInMs) {
      return `${Math.floor(diffInMs / hourInMs)}시간 전`;
    } else if (hourInMs >= diffInMs >= minuteInMs) {
      return `${Math.floor(diffInMs / minuteInMs)}분 전`;
    } else {
      const dateStr = then
        .toLocaleString('ko-KR', {
          year: 'numeric',
          month: '2-digit',
          day: '2-digit',
        })
        .replace(/-/g, '')
        .replace(/\s/g, '')
        .slice(0, -1);
      return dateStr;
    }
  };
  return (
    <div className={styles.itemcontainer}>
      <div>&nbsp;</div>
      <div className={styles['title-content']}>
        <div className={styles['sub-info']}>
          <div className={styles.press}>{article.newsPress}</div> |
          <div className={styles.time}>{get_time(article.newsDate, article.newsTime)}</div>
        </div>
        <div className={styles.title} onClick={() => ModalOpen()}>
          {article.newsTitle}
        </div>
        <div className={styles.content} onClick={() => ModalOpen()}>
          {article.newsContent}
        </div>
      </div>
      <div className={styles.thumbnail} onClick={() => ModalOpen()}>
        {article.newsThumbnail ? (
          <img src={article.newsThumbnail} alt="thumbnail" />
        ) : (
          <img src={thumbnail} alt="thumbnail" />
        )}
      </div>
      {modalOpen && (
        <div className={styles1.container1}>
          <ArticleModal article={article} setModalOpen={setModalOpen} navigate={navigate} />
        </div>
      )}
    </div>
  );
}
