import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import styles from './TimeLine.module.scss';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NewsItem from 'components/Common/News/NewsItem';
import Pagination from 'components/Common/News/Pagination';

function InterpolationChart() {
  const location = useLocation();
  const result = location.state.result;
  const [resultData, setResultData] = useState();
  const chartRef = useRef();
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState();

  // const handleChange = async (event, value) => {
  //   setCurrentPage(value);
  //   const response = await axios.post('http://j8e204.p.ssafy.io:8001/news/search', {
  //     word: keyword,
  //     limit: 5,
  //     offset: value - 1,
  //     type: 0,
  //   });
  //   setResultData(response.data);
  // };
  useEffect(() => {
    const chart = new Chart(chartRef.current.getContext('2d'), {
      type: 'line',
      data: {
        labels: result.clusters.map(item => `${item.date}\n${item.clusterKeyword}`),
        datasets: [
          {
            label: '기사 수 ',
            data: result.clusters.map(item => `${item.newsCount}`),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            cubicInterpolationMode: 'monotone',
            tension: 0.1,
            borderWidth: 2,
            lineTension: 0.5,
            borderDash: [5, 5],
          },
        ],
      },
      options: {
        responsive: true,
        events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove'],
        onClick: async e => {
          const chart = e.chart;
          const point = chart.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
          if (point.length > 0) {
            const index = point[0].index;
            // const label = chart.data.labels[index];
            // const value = chart.data.datasets[point[0].datasetIndex].data[index];
            const keyword = result.clusters[index].clusterKeyword;

            // 1. 선택한 키워드 값을 이용해서 axios 요청 보내서 검색결과 받아오기
            const response = await axios.post('http://j8e204.p.ssafy.io:8001/news/search', {
              word: keyword,
              limit: 5,
              offset: 0,
              type: 0,
            });
            console.log(response.data);
            setResultData(response.data);
            // 2. 검색 결과를 result에 저장해서 NewsItem 가져오기
            // 3. Pagination 가져오기
            // 4. CSS 조정
          }
        },
        interaction: {
          mode: 'index',
          intersect: true,
        },
        scales: {
          x: {
            display: true,
            title: {
              display: true,
              text: '일자',
            },
            ticks: {
              display: false,
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: '기사 수',
            },
            ticks: {
              display: false,
            },
            suggestedMin: 0,
            suggestedMax: 50,
          },
        },
      },
    });

    window.addEventListener('resize', () => {
      chart.resize();
    });
  }, []);
  return (
    <div>
      <div className={styles.chart}>
        <canvas ref={chartRef} />
      </div>
      {/* {resultData.map(n => (
        <NewsItem key={n.newsId} article={n} />
      ))} */}
      {/* <Pagination
        count={resultData.totalPage}
        page={currentPage}
        onChange={handleChange}
        size="large"
        showFirstButton
        showLastButton
      /> */}
    </div>
  );
}

export default InterpolationChart;
