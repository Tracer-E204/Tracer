import React, { useState } from 'react';
import styles from './WordCloud.module.scss';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import WordCloud from 'react-d3-cloud';
import { scaleOrdinal } from 'd3-scale';
import { schemeCategory10 } from 'd3-scale-chromatic';
import HotelsResult from './test';

export default function WordCloudPage() {
  const words = [
    {
      text: '러시아',
      value: 10000,
    },
    {
      text: '우크라이나',
      value: 10222,
    },
    {
      text: '젤렌스키',
      value: 8000,
    },
    {
      text: '크림반도',
      value: 7000,
    },
    {
      text: '푸틴',
      value: 9000,
    },
    {
      text: '러우전쟁',
      value: 17000,
    },
    {
      text: '키이우',
      value: 8700,
    },
    {
      text: '무기대여법',
      value: 1400,
    },
    {
      text: 'SU-27',
      value: 100,
    },
    {
      text: 'MQ-9 무인기',
      value: 400,
    },
    {
      text: 'MQ-9 무인기',
      value: 400,
    },
    {
      text: '군대',
      value: 1400,
    },
    {
      text: '철수',
      value: 2400,
    },
    {
      text: '사태',
      value: 3400,
    },
    {
      text: '영향',
      value: 4400,
    },
    {
      text: '바이든',
      value: 5400,
    },
    {
      text: '서방',
      value: 6400,
    },
    {
      text: '나토',
      value: 280,
    },
    {
      text: '가능성',
      value: 300,
    },
    {
      text: '증시',
      value: 110,
    },
    {
      text: '키에프',
      value: 194,
    },
    {
      text: '돈바스',
      value: 260,
    },
    {
      text: '소련',
      value: 460,
    },
    {
      text: '제재',
      value: 6400,
    },
    {
      text: '대만',
      value: 900,
    },
    {
      text: '한국',
      value: 1200,
    },
    {
      text: '일본',
      value: 2500,
    },
    {
      text: '터키',
      value: 400,
    },
    {
      text: '제재',
      value: 6400,
    },
    {
      text: '대만',
      value: 900,
    },
    {
      text: '한국',
      value: 1200,
    },
    {
      text: '일본',
      value: 2500,
    },
    {
      text: '터키',
      value: 400,
    },
    {
      text: '제재',
      value: 6400,
    },
    {
      text: '대만',
      value: 900,
    },
    {
      text: '한국',
      value: 1200,
    },
    {
      text: '일본',
      value: 2500,
    },
    {
      text: '터키',
      value: 400,
    },
    {
      text: '제재',
      value: 6400,
    },
    {
      text: '대만',
      value: 900,
    },
    {
      text: '한국',
      value: 1200,
    },
    {
      text: '일본',
      value: 2500,
    },
    {
      text: '터키',
      value: 400,
    },
    {
      text: '제재',
      value: 6400,
    },
    {
      text: '대만',
      value: 900,
    },
    {
      text: '한국',
      value: 1200,
    },
    {
      text: '일본',
      value: 2500,
    },
    {
      text: '터키',
      value: 400,
    },
    {
      text: '제재',
      value: 6400,
    },
    {
      text: '대만',
      value: 900,
    },
    {
      text: '한국',
      value: 1200,
    },
    {
      text: '일본',
      value: 2500,
    },
    {
      text: '터키',
      value: 400,
    },
    {
      text: '제재',
      value: 6400,
    },
    {
      text: '대만',
      value: 900,
    },
    {
      text: '한국',
      value: 1200,
    },
    {
      text: '일본',
      value: 2500,
    },
    {
      text: '터키',
      value: 400,
    },
    {
      text: '제재',
      value: 6400,
    },
    {
      text: '대만',
      value: 900,
    },
    {
      text: '한국',
      value: 1200,
    },
    {
      text: '일본',
      value: 2500,
    },
    {
      text: '터키',
      value: 400,
    },
    {
      text: '제재',
      value: 6400,
    },
    {
      text: '대만',
      value: 900,
    },
    {
      text: '한국',
      value: 1200,
    },
    {
      text: '일본',
      value: 2500,
    },
    {
      text: '터키',
      value: 400,
    },
  ];

  const schemeCategory10ScaleOrdinal = scaleOrdinal(schemeCategory10);

  return (
    <div className={styles['cloud-container']}>
      <h1>
        Check <span>this</span> fucking awesome WordCloud
      </h1>
      <div className={styles['stick']}>
        <div className={styles['bar']} />
      </div>
      <div className={styles['calendar']}>
        <WordCloud data={words} fill="white" spiral="rectangular" />
      </div>
    </div>
  );
}
