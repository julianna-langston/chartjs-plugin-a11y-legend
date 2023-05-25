import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import plugin from "../../src/plugin";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  plugin
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Adjustable',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const defaultData = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [1,2,3,4,5],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [0,2,4,6,8],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function App() {
  const [data, setData] = React.useState(defaultData);

  const randomize = () => {
    const newData = {
      labels: data.labels,
      datasets: data.datasets.map((d, index) => {
        return {
          ...d,
          data: data.labels.map(() => Math.floor(Math.random()*10))
        }
      })
    };
    setData(newData);
  }

  return <div>
    <Bar options={options} data={data} />
    <button onClick={randomize}>Randomize</button>
  </div>;
}
