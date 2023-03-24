import React, { useState } from 'react';
import styles from './WordCloud.module.scss';
import ReactWordcloud from 'react-wordcloud';

export default function WordCloud() {
  const words = [
    {
      keyword: '러시아',
      count: 10000,
    },
    {
      keyword: '우크라이나',
      count: 10222,
    },
    {
      keyword: '젤렌스키',
      count: 8000,
    },
    {
      keyword: '크림반도',
      count: 7000,
    },
    {
      keyword: '푸틴',
      count: 9000,
    },
    {
      keyword: '러우전쟁',
      count: 17000,
    },
    {
      keyword: '키이우',
      count: 8700,
    },
    {
      keyword: '무기대여법',
      count: 1400,
    },
    {
      keyword: 'SU-27',
      count: 100,
    },
    {
      keyword: 'MQ-9 무인기',
      count: 400,
    },
    {
      keyword: 'MQ-9 무인기',
      count: 400,
    },
    {
      keyword: '군대',
      count: 1400,
    },
    {
      keyword: '철수',
      count: 2400,
    },
    {
      keyword: '사태',
      count: 3400,
    },
    {
      keyword: '영향',
      count: 4400,
    },
    {
      keyword: '바이든',
      count: 5400,
    },
    {
      keyword: '서방',
      count: 6400,
    },
    {
      keyword: '나토',
      count: 280,
    },
    {
      keyword: '가능성',
      count: 300,
    },
    {
      keyword: '증시',
      count: 110,
    },
    {
      keyword: '키에프',
      count: 194,
    },
    {
      keyword: '돈바스',
      count: 260,
    },
    {
      keyword: '소련',
      count: 460,
    },
    {
      keyword: '제재',
      count: 6400,
    },
    {
      keyword: '대만',
      count: 900,
    },
    {
      keyword: '한국',
      count: 1200,
    },
    {
      keyword: '일본',
      count: 2500,
    },
    {
      keyword: '터키',
      count: 400,
    },
    {
      keyword: '제재',
      count: 6400,
    },
    {
      keyword: '대만',
      count: 900,
    },
    {
      keyword: '한국',
      count: 1200,
    },
    {
      keyword: '일본',
      count: 2500,
    },
    {
      keyword: '터키',
      count: 400,
    },
    {
      keyword: '제재',
      count: 6400,
    },
    {
      keyword: '대만',
      count: 900,
    },
    {
      keyword: '한국',
      count: 1200,
    },
    {
      keyword: '일본',
      count: 2500,
    },
    {
      keyword: '터키',
      count: 400,
    },
    {
      keyword: '제재',
      count: 6400,
    },
    {
      keyword: '대만',
      count: 900,
    },
    {
      keyword: '한국',
      count: 1200,
    },
    {
      keyword: '일본',
      count: 2500,
    },
    {
      keyword: '터키',
      count: 400,
    },
    {
      keyword: '제재',
      count: 6400,
    },
    {
      keyword: '대만',
      count: 900,
    },
    {
      keyword: '한국',
      count: 1200,
    },
    {
      keyword: '일본',
      count: 2500,
    },
    {
      keyword: '터키',
      count: 400,
    },
    {
      keyword: '제재',
      count: 6400,
    },
    {
      keyword: '대만',
      count: 900,
    },
    {
      keyword: '한국',
      count: 1200,
    },
    {
      keyword: '일본',
      count: 2500,
    },
    {
      keyword: '터키',
      count: 400,
    },
    {
      keyword: '제재',
      count: 6400,
    },
    {
      keyword: '대만',
      count: 900,
    },
    {
      keyword: '한국',
      count: 1200,
    },
    {
      keyword: '일본',
      count: 2500,
    },
    {
      keyword: '터키',
      count: 400,
    },
    {
      keyword: '제재',
      count: 6400,
    },
    {
      keyword: '대만',
      count: 900,
    },
    {
      keyword: '한국',
      count: 1200,
    },
    {
      keyword: '일본',
      count: 2500,
    },
    {
      keyword: '터키',
      count: 400,
    },
    {
      keyword: '제재',
      count: 6400,
    },
    {
      keyword: '대만',
      count: 900,
    },
    {
      keyword: '한국',
      count: 1200,
    },
    {
      keyword: '일본',
      count: 2500,
    },
    {
      keyword: '터키',
      count: 400,
    },
  ];
  const options = {
    colors: ['#001f3f', '#0074D9', '#7FDBFF', '#39CCCC', '#3D9970'],
    enableTooltip: true,
    deterministic: false,
    fontFamily: 'impact',
    fontSizes: [20, 80],
    fontStyle: 'normal',
    fontWeight: 'normal',
    padding: 1,
    rotations: 3,
    rotationAngles: [0],
    scale: 'sqrt',
    spiral: 'archimedean',
    transitionDuration: 1000,
  };
  return (
    <div className={styles['cloud-container']}>
      <div style={{ width: 1500, height: 800 }}>
        <ReactWordcloud words={words} options={options} />
      </div>
    </div>
  );
}
