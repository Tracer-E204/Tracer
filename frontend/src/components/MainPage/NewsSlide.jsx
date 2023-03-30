import React, { useState, useEffect } from 'react';
import styles from './NewsSlide.module.scss';
import axios from 'axios';
import thumbnail from 'assets/images/tracer_thumbnail.png';

export default function NewsSlide() {
  // const useInterval = (callback, delay) => {
  //   const savedCallback = useRef();

  //   useEffect(() => {
  //     savedCallback.current = callback;
  //   });

  //   useEffect(() => {
  //     function tick() {
  //       savedCallback.current();
  //     }
  //     if (delay !== null) {
  //       let id = setInterval(tick, delay);
  //       return () => clearInterval(id);
  //     }
  //   }, [delay]);
  // };
  //Autoplay
  // useInterval(() => {
  //   setActive((activeIndex + 1) % len);
  // }, 5000);

  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('http://j8e204.p.ssafy.io:8001/news/daily')
      .then(res => res.json())
      .then(res => {
        console.log(1, res);
        setList(res);
      });
  }, []);
  console.log(3, list);

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
        <div className={styles['background']}>
          {/* {list[activeIndex].newsThumbnail ? (
            <img src={get_img(list[activeIndex])} />
          ) : (
            <img src={thumbnail} alt="thumbnail" />
          )} */}
        </div>
        {list.map((article, idx) => (
          <div className={styles['card']} key={idx} onClick={() => setActive(idx)} style={getStyle(idx)}>
            <div className={styles.itemcontainer}>
              <div className={styles.thumbnail}>
                {console.log(article.newsThumbnail)}
                {article.newsThumbnail ? (
                  <img src={get_img(article)} alt={`Slide ${idx}`} />
                ) : (
                  <img src={thumbnail} alt="thumbnail" />
                )}
              </div>
              <div className={styles.press}>{article.newsPress}</div>
              <div className={styles.title}>{article.newsTitle}</div>
              <div className={styles.time}>1일 전</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <Carousel />;
}
