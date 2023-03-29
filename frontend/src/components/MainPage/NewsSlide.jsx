import React, { useState } from 'react';
import styles from './NewsSlide.module.scss';
import image1 from './assets/images/1.jpg';
import image2 from './assets/images/2.png';
import image3 from './assets/images/3.jpg';
import image4 from './assets/images/4.jpg';
import image5 from './assets/images/5.jpg';
import image6 from './assets/images/6.png';
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

  const articles = [
    {
      page: 9,
      title: '0',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image1,
      type: 0,
    },
    {
      page: 9,
      title: '1',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image2,
      type: 0,
    },
    {
      page: 9,
      title: '2',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image3,
      type: 0,
    },
    {
      page: 9,
      title: '3',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image4,
      type: 0,
    },
    {
      page: 9,
      title: '4',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image5,
      type: 0,
    },
    {
      page: 9,
      title: '5',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image6,
      type: 0,
    },
    {
      page: 9,
      title: '6',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image1,
      type: 0,
    },
    {
      page: 9,
      title: '7',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image2,
      type: 0,
    },
    {
      page: 9,
      title: '8',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image3,
      type: 0,
    },
    {
      page: 9,
      title: '9',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image4,
      type: 0,
    },
    {
      page: 9,
      title: '10',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image5,
      type: 0,
    },
    {
      page: 9,
      title: '11',
      press: 'KBS',
      time: '12:53',
      reporter: '홍화경',
      thumbnail: image6,
      type: 0,
    },
  ];
  const images = [image1, image2, image3, image4, image5, image6, image1, image2, image3, image4, image5, image6];

  const Carousel = props => {
    const { images } = props;
    const len = images.length;
    const [activeIndex, setActive] = useState(0);

    //Autoplay
    // useInterval(() => {
    //   setActive((activeIndex + 1) % len);
    // }, 5000);

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
        styleObj.opacity = Math.max(0.93, scale); // decrease opacity based on scale
      }

      // The distance is not less than 2, hide
      if (Math.abs(distance) >= 3) {
        styleObj.opacity = 0;
        styleObj.transform = 'scale(0)';
      }

      return styleObj;
    };

    return (
      <div className={styles['slide-container']}>
        <div className={styles['background']}>
          <img src={articles[activeIndex].thumbnail} alt="logo" />
        </div>
        {articles.map((article, idx) => (
          <div className={styles['card']} key={idx} onClick={() => setActive(idx)} style={getStyle(idx)}>
            <div className={styles.itemcontainer}>
              <div className={styles.thumbnail}>
                {article.thumbnail ? (
                  <img src={thumbnail} alt="thumbnail" />
                ) : (
                  <imxg src={article.thumbnail} alt={`Slide ${idx}`} />
                )}
              </div>
              <div className={styles.press}>{article.press}</div>
              <div className={styles.title}>{article.title}</div>
              <div className={styles.time}>1일 전</div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  return <Carousel images={images} />;
}
