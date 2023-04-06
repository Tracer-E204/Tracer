import React, { useState, useEffect } from 'react';
import styles from './NewsSlide.module.scss';
import thumbnail from 'assets/images/tracer_thumbnail.png';
import ArticleModal from '../Article/ArticleModal';
import styles1 from '../Article/ArticleModal.module.scss';

export default function NewsSlide() {
  const [modalOpen, setModalOpen] = useState(false);
  const [article, setArticle] = useState(null);
  const ModalOpen = article => {
    setArticle(article);
    setModalOpen(true);
  };
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/news/daily`)
      .then(res => res.json())
      .then(res => {
        setList(res);
      });
  }, []);

  const Carousel = props => {
    const len = 12;
    const [activeIndex, setActive] = useState(0);

    const zBase = 998;
    const getStyle = idx => {
      const distanceLeft = activeIndex - idx;
      const distanceRight = distanceLeft < 0 ? distanceLeft + len : distanceLeft - len;
      const distance = Math.abs(distanceLeft) > Math.abs(distanceRight) ? distanceRight : distanceLeft;

      const styleObj = {};

      if (distance === 0) {
        // activeIndex
        styleObj.left = '33.3%';
        styleObj.zIndex = zBase;
        styleObj.opacity = 1;
        styleObj.transform = 'scale(1)';
        styleObj.cursor = 'pointer';
      } else {
        const scale = 1 - Math.abs(distance) * 0.27; // decrease scale based on distance
        const overlap = 16 * Math.abs(distance); // overlap distance between images
        if (distance < 0) {
          // left side
          styleObj.left = `${33.3 - overlap}%`;
          styleObj.zIndex = zBase - Math.abs(distance);
        } else {
          // right side
          styleObj.left = `${33.3 + overlap}%`;

          styleObj.zIndex = zBase - Math.abs(distance);
        }
        styleObj.transform = `scale(${scale})`;
        styleObj.opacity = Math.max(0.9, scale); // decrease opacity based on scale
      }

      // The distance is not less than 2, hide
      if (Math.abs(distance) >= 3) {
        styleObj.opacity = 0;
        styleObj.transform = 'scale(0)';
      }

      return styleObj;
    };

    function get_img(article) {
      const regex = /https:\/\/.*?"/gi;
      const matches = article.newsSource.match(regex);

      if (matches) {
        const imageURLs = matches.map(match => match.slice(0, -1));
        return imageURLs[0];
      }
    }

    return (
      <div className={styles['slide-container']}>
        <div className={styles.background}>
          {list && list[activeIndex] && list[activeIndex].newsThumbnail ? (
            <img src={get_img(list[activeIndex])} alt="" />
          ) : (
            <img src={thumbnail} alt="thumbnail" />
          )}
        </div>
        {list.map((article, idx) => (
          <div className={styles.card} key={idx} onClick={() => setActive(idx)} style={getStyle(idx)}>
            {article && (
              <div className={styles.itemcontainer}>
                <div
                  className={styles.thumbnail}
                  onClick={() => {
                    const distance = activeIndex - idx;
                    if (Math.abs(distance) === 0) {
                      ModalOpen(article);
                    }
                  }}
                >
                  {article.newsThumbnail ? (
                    <img src={get_img(article)} alt={`Slide ${idx}`} />
                  ) : (
                    <img src={thumbnail} alt="thumbnail" />
                  )}
                </div>
                <div className={styles.press}>{article.newsPress}</div>
                <div
                  className={styles.title}
                  onClick={() => {
                    const distance = activeIndex - idx;
                    if (Math.abs(distance) === 0) {
                      ModalOpen(article);
                    }
                  }}
                >
                  {article.newsTitle}
                </div>
              </div>
            )}
          </div>
        ))}
        {modalOpen && (
          <div className={styles1.container1}>
            <ArticleModal article={article} setModalOpen={setModalOpen} />
          </div>
        )}
      </div>
    );
  };

  return <Carousel />;
}
