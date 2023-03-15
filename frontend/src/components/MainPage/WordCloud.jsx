import React, { useState } from 'react';
import styles from './WordCloud.module.scss';
import ReactWordcloud from 'react-wordcloud';

export default function WordCloud() {
  const words = [
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '너무좋아3',
      value: 430,
    },
    {
      text: 'told',
      value: 64,
    },
    {
      text: 'mistake',
      value: 400,
    },
    {
      text: 'thought',
      value: 100,
    },
    {
      text: '승민이형',
      value: 11130,
    },
    {
      text: '엉덩이',
      value: 1230,
    },
    {
      text: '너무좋아',
      value: 1130,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '너무좋아3',
      value: 430,
    },
    {
      text: 'told',
      value: 64,
    },
    {
      text: 'mistake',
      value: 400,
    },
    {
      text: 'thought',
      value: 100,
    },
    {
      text: '승민이형',
      value: 11130,
    },
    {
      text: '엉덩이',
      value: 1230,
    },
    {
      text: '너무좋아',
      value: 1130,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
    },
    {
      text: '형귱형',
      value: 2230,
    },
    {
      text: '너무좋아2',
      value: 530,
    },
    {
      text: '경훈재혁영재',
      value: 330,
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
