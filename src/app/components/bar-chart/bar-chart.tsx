import { ArcElement, BarElement, Chart as ChartJS, Legend, Tooltip } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { IAverage } from '@/app/types';

ChartJS.register(ArcElement, Tooltip, Legend, BarElement);

interface BarChartProps {
  average: IAverage[];
}

export const BarChart = ({ average }: BarChartProps) => {
  let values = average.map((item) => item.average);
  let labels = average.map((item) => item.start.substring(8, 10));

  const options = {
    responsive: true,
    scales: {
      yAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'methane',
          },
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          scaleLabel: {
            display: true,
            labelString: 'day',
          },
        },
      ],
    },
  };

  const data = {
    // use start times contained in the requested data as labels
    labels: labels,
    datasets: [
      {
        label: 'Germany',
        backgroundColor: '#93bd20',
        // use the average values as data
        data: values,
      },
    ],
  };

  return <Bar data={data} />;
};
