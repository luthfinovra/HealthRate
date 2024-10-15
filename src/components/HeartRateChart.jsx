import React from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const HeartRateChart = ({ data }) => {
  const chartData = {
    labels: data.map((_, index) => index), // labels as time or index
    datasets: [
      {
        label: 'Heart Rate (BPM)',
        data: data,
        borderColor: 'rgb(75, 192, 192)',
        tension: 0.1, // creates the smooth curve like ECG
        borderWidth: 2,
        pointRadius: 0, // no points, just a line
      },
    ],
  };

  const options = {
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Time (s)',
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'BPM',
        },
        suggestedMin: 40,
        suggestedMax: 150,
      },
    },
    plugins: {
      legend: {
        display: false, // hides the legend
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default HeartRateChart;
