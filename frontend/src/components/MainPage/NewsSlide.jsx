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

  const images = [image1, image2, image3, image4, image5, image6];

  const Carousel = props => {
    const { images } = props;
    const len = images.length;
    const [activeIndex, setActive] = useState(0);

    //Autoplay
    useInterval(() => {
      setActive((activeIndex + 1) % len);
    }, 5000);

    //Return style according to index
    const getStyle = idx => {
      //Counting from the left, the distance between idx and currentKey
      const distance_left = idx - activeIndex;
      //Counting from the right, the distance between idx and currentKey
      const distance_right = distance_left > 0 ? distance_left - len : distance_left + len;
      //Select the distance with the smallest absolute value
      const distance = Math.abs(distance_left) > Math.abs(distance_right) ? distance_right : distance_left;

      const styleObj = {};

      if (distance === 0) {
        //activeIndex
        styleObj.left = '33.3%';
        styleObj.zIndex = 999;
        styleObj.opacity = 1;
        styleObj.transform = 'scale(1)';
      } else {
        styleObj.left = distance > 0 ? `${16.7 + distance * 40}%` : `${50 + distance * 40}%`;
      }

      //The distance is not less than 2, hide
      if (Math.abs(distance) >= 2) {
        styleObj.opacity = 0;
        styleObj.transform = 'scale(0)';
      }

      return styleObj;
    };

    return (
      <div className={styles['slide-container']}>
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
