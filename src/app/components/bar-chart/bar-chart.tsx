'use client';

import { Chart as ChartJS, registerables } from 'chart.js';
import { useContext, useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { DEFAULT_COUNTRY, DEFAULT_PRODUCT } from '@/app/constants';
import { AppContext } from '@/app/providers';
import { IAverage } from '@/app/types';
import styles from './bar-chart.module.css';

ChartJS.register(...registerables);

interface BarChartProps {
  average: IAverage[];
}

export const BarChart = ({ average }: BarChartProps) => {
  let values = average.map((item) => item.average);
  let labels = average.map((item) => item.start.substring(8, 10));

  const { filter, countries } = useContext(AppContext);

  const [label, setLabel] = useState<string>(DEFAULT_COUNTRY);

  const options = {
    responsive: true,
    scales: {
      yAxis: {
        scaleLabel: {
          display: true,
          labelString: DEFAULT_PRODUCT,
        },
        ticks: {
          beginAtZero: true,
        },
      },
      xAxis: {
        scaleLabel: {
          display: true,
          labelString: 'day',
        },
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: label,
        backgroundColor: '#9f86c0',
        data: values,
      },
    ],
  };

  useEffect(() => {
    if (filter?.country) {
      setLabel(countries.find((country) => country.code === filter?.country)?.label || DEFAULT_COUNTRY);
    }
  }, [filter, countries]);

  return (
    <div className={styles.chart}>
      <Bar data={data} options={options} />
    </div>
  );
};
