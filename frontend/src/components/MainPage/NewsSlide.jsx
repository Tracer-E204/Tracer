import React, { useState, useRef, useEffect } from 'react';
import styles from './NewsSlide.module.scss';
import image1 from './assets/images/1.jpg';
import image2 from './assets/images/2.png';
import image3 from './assets/images/3.jpg';
import image4 from './assets/images/4.jpg';
import image5 from './assets/images/5.jpg';
import image6 from './assets/images/6.png';

export default function NewsSlide() {
  const useInterval = (callback, delay) => {
    const savedCallback = useRef();

    useEffect(() => {
      savedCallback.current = callback;
    });

    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  };

  const images = [image1, image2, image3, image4, image5, image6, image1, image2, image3, image4, image5, image6];

  const Carousel = props => {
    const { images } = props;
    const len = images.length;
    const [activeIndex, setActive] = useState(0);

    //Autoplay
    useInterval(() => {
      setActive((activeIndex + 1) % len);
    }, 5000);

    const getStyle = idx => {
      const distanceLeft = activeIndex - idx;
      const distanceRight = distanceLeft > 0 ? distanceLeft - len : distanceLeft + len;
      const distance = Math.abs(distanceLeft) > Math.abs(distanceRight) ? distanceRight : distanceLeft;

      const styleObj = {};

      if (distance === 0) {
        // activeIndex
        styleObj.left = '33.3%';
        styleObj.zIndex = 999;
        styleObj.opacity = 1;
        styleObj.transform = 'scale(1)';
      } else {
        const scale = 1 - Math.abs(distance) * 0.2; // decrease scale based on distance
        const overlap = 13 * Math.abs(distance); // overlap distance between images
        styleObj.left = distance > 0 ? `${33.3 - overlap}%` : `${33.3 + overlap}%`;
        styleObj.transform = `scale(${scale})`;
        styleObj.opacity = Math.max(0.5, scale); // decrease opacity based on scale
      }

      //The distance is not less than 2, hide
      if (Math.abs(distance) >= 3) {
        styleObj.opacity = 0;
        styleObj.transform = 'scale(0)';
      }

      return styleObj;
    };

    return (
      <div className={styles['slide-container']}>
        <div className={styles['header']}>
          <h1>Daily News</h1>
        </div>

        {images.map((img, idx) => (
          <div className={styles['card']} key={idx} onClick={() => setActive(idx)} style={getStyle(idx)}>
            <img src={img} alt={`Slide ${idx}`} />
          </div>
        ))}
      </div>
    );
  };

  return <Carousel images={images} />;
}
