import React from 'react';
import styles from './Intro.module.scss';

export default function Intro() {
  return (
    <div className={styles['intro-container']}>
      <div className={styles['intro-title']}>
        <h1> 핵심 뉴스가 당신의 손끝에서</h1>
      </div>
      <div className={styles['intro-script']}>
        <p> 시간 순으로 정리된 연관 뉴스와 함께 최신 소식을 놓치지 마세요 </p>
      </div>
    </div>
  );
}
