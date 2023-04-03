import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import styles from './TimeLine.module.scss';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import NewsItem from 'components/Common/News/NewsItem';

function InterpolationChart() {
  const [chart, setChart] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const result = location.state.result;
  const [resultData, setResultData] = useState([]);
  const chartRef = useRef();

  useEffect(() => {
    setResultData([]);
    if (chart) {
      chart.destroy();
    }

    const Newchart = new Chart(chartRef.current.getContext('2d'), {
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
            const keyword = result.clusters[index].clusterKeyword;

            // 1. 선택한 키워드 값을 이용해서 axios 요청 보내서 검색결과 받아오기
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/news/search`, {
              word: keyword,
              limit: 5,
              offset: 0,
              type: 0,
            });
            setResultData(response.data);
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
    setChart(Newchart);
    window.addEventListener('resize', () => {
      Newchart.resize();
    });
    return () => {
      if (Newchart) {
        Newchart.destroy();
      }
    };
  }, [result]);

  return (
    <div>
      <div className={styles.chart}>
        <canvas ref={chartRef} />
      </div>
      <div className={styles.item}>
        {resultData.list && resultData.list.map(n => <NewsItem key={n.newsId} article={n} navigate={navigate} />)}
      </div>
    </div>
  );
}

export default InterpolationChart;
