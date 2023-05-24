import React from 'react';
import styles from './Loading.module.scss';

const Loading = () => {
  return (
    <div className={styles.loadingWrapper}>
      <div className={styles.animate}>
        <span>Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
