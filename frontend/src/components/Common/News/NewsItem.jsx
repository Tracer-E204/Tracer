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
  return (
    <div className={styles.itemcontainer}>
      <div className={styles['title-content']}>
        <div className={styles['sub-info']}>
          <div className={styles.press}>{article.newsPress}</div>
          <div className={styles.time}>1일 전</div>
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
