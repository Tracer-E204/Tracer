import React, { useRef, useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';
import styles from './TimeLine.module.scss';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import NewsItem from 'components/Common/News/NewsItem';
import { Pagination } from '@mui/material';

function InterpolationChart() {
  const location = useLocation();
  const result = location.state.result;
  const [resultData, setResultData] = useState([]);
  const chartRef = useRef(null);
  const [chart, setChart] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [idvalue, setIdvalue] = useState();

  const handleChange = async (event, value) => {
    setCurrentPage(value);
    const response = await axios.post(`${process.env.REACT_APP_API_URL}/news/cluster`, {
      clusterId: idvalue,
      limit: 5,
      offset: value - 1,
    });
    setResultData(response.data);
  };

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
          const chart1 = e.chart;
          const point = chart1.getElementsAtEventForMode(e, 'nearest', { intersect: true }, true);
          if (point.length > 0) {
            const index = point[0].index;
            const keyId = result.clusters[index].clusterId;
            setIdvalue(keyId);

            // 1. 선택한 키워드 값을 이용해서 axios 요청 보내서 검색결과 받아오기
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/news/cluster`, {
              clusterId: keyId,
              offset: 0,
              limit: 5,
            });
            setResultData(response.data);
            setCurrentPage(1);
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
              display: false,
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [result]);

  return (
    <div>
      <div className={styles.chart}>
        <canvas ref={chartRef} />
      </div>
      <hr className={styles.line} />
      <div className={styles.item}>
        {resultData.list && resultData.list.map(n => <NewsItem key={n.newsId} article={n} />)}
      </div>
      {resultData.list && resultData.list.length > 0 && (
        <div className={styles.pages}>
          <Pagination
            count={resultData.totalPage}
            page={currentPage}
            onChange={handleChange}
            size="large"
            showFirstButton
            showLastButton
          />
        </div>
      )}
    </div>
  );
}

export default InterpolationChart;
