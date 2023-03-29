import React, { Component, useEffect, useState } from 'react';
import { Chart } from 'chart.js/auto';

class InterpolationChart extends Component {
  constructor(props) {
    super(props);
    this.chartRef = React.createRef();
  }

  componentDidMount() {
    const chartRef = this.chartRef.current.getContext('2d');

    new Chart(chartRef, {
      type: 'line',
      data: {
        labels: [
          '2023-03-10\nkey1',
          '2023-03-13\nkey2',
          '2023-03-14\nkey3',
          '2023-03-15\nkey4',
          '2023-03-19\nkey5',
          '2023-03-22\nkey6',
          '2023-03-25\nkey7',
          '2023-03-29\nkey8',
        ],
        datasets: [
          {
            label: '기사 수 ',
            data: [0, 40, 30, 70, 50, 40, 60, 70],
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
        plugins: {
          title: {
            display: true,
            text: 'Chart.js Interpolation Mode',
          },
        },
        interaction: {
          mode: 'index',
          intersect: false,
        },
        scales: {
          x: {
            display: false,
            title: {
              display: false,
              text: 'Month',
            },
          },
          y: {
            display: true,
            title: {
              display: true,
              text: 'Value',
            },
            suggestedMin: 0,
            suggestedMax: 50,
          },
        },
      },
    });
  }

  render() {
    return (
      <div>
        <canvas ref={this.chartRef} />
      </div>
    );
  }
}

export default InterpolationChart;
