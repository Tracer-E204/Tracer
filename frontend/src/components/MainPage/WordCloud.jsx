import React, { useState, useEffect, useCallback } from 'react';
import styles from './WordCloud.module.scss';
import WordCloud from 'react-d3-cloud';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function WordCloudPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/keyword/daily?type=2`)
      .then(res => res.json())
      .then(res => {
        setData(res);
        console.log(res);
      });
  }, []);

  const words = data.map(d => ({ text: d.keyword, value: d.count }));
  console.log(words);
  const navigate = useNavigate();

  const handleWordClick = async e => {
    // PointerEvent에서 target 속성을 사용하여 클릭된 엘리먼트에 액세스합니다.
    console.log(e.target.innerHTML);
    const target = e.target;
    const children = target.innerHTML;

    e.preventDefault();
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/news/search`, {
        word: children,
        limit: 5,
        offset: 0,
        type: 0,
      });
      if (response.data.totalCount === 0) {
        throw new Error('검색결과가 존재하지 않습니다.');
      }
      navigate(`/searchresult`, { state: { result: response.data, text: children } });
    } catch (error) {
      alert(error.message);
    }
  };
  function fontSizeMapper(word) {
    return word.value;
  }

  const fontSize = useCallback(word => Math.log2(word.value) * 5, []);
  const handleWordMouseOver = (word, event) => {
    // word.target.setAttribute(
    //   'style',
    //   `font-style: normal; font-weight: normal; font-size: ${
    //     Math.log2(word.value) * 5
    //   }px; fill: yellow; cursor:pointer `
    // );
    // console.log(word.target);
  };

  const handleWordMouseOut = (word, event) => {
    // console.log(word);
    // word.target.setAttribute(
    //   'style',
    //   `font-style: normal; font-weight: normal; font-size: ${fontSize}px; fill: white;`
    // );
  };

  return (
    <div className={styles['cloud-container']}>
      <h1>
        Check <span>this</span> WordCloud
      </h1>
      <div className={styles['stick']}>
        <div className={styles['bar']} />
      </div>
      <div className={styles['calendar']}>
        <WordCloud
          data={words}
          style={{ pointer: 'cursor' }}
          font="Times"
          rotate="0"
          spiral="rectangular"
          onWordClick={handleWordClick}
          onWordMouseOver={handleWordMouseOver}
          onWordMouseOut={handleWordMouseOut}
          padding={5}
        />
      </div>
    </div>
  );
}
