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

  const [countryLabel, setCountryLabel] = useState<string>(DEFAULT_COUNTRY);
  const [productText, setProductLabel] = useState<string>(DEFAULT_PRODUCT);

  const options = {
    responsive: true,
    scales: {
      y: {
        display: true,
        title: {
          display: true,
          text: productText,
        },
        ticks: {
          major: {
            enabled: true,
          },
        },
      },
      x: {
        display: true,
        title: {
          display: true,
          text: 'day',
        },
      },
    },
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: countryLabel,
        backgroundColor: '#dde5b6',
        data: values,
      },
    ],
  };

  useEffect(() => {
    if (filter?.country) {
      setCountryLabel(countries.find((country) => country.code === filter?.country)?.label || DEFAULT_COUNTRY);
    }

    if (filter?.product) {
      setProductLabel(filter.product);
    }
  }, [filter, countries]);

  return (
    <div className={styles.chart}>
      <Bar data={data} options={options} />
    </div>
  );
};
