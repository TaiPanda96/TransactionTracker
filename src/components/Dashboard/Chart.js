import React from 'react';
import { useState, useEffect } from 'react';
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
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const InterestChartCard = () => {
  const [isLoading, setLoading] = useState(false);
  const [barChartData, setData] = useState([]);
  const [title, setTitle] = useState('');
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    const accessToken = sessionStorage.getItem("accessToken");
    fetch('http://localhost:8080/api/transactions/get-transaction-interest-stats', {
      headers: {
        'Content-Type': 'application/json',
        'authorization': accessToken
      }
    }).then((data) => data.json()).then((response) => {
      if (response) {
        setData(response.chartData)
        setTitle(response.chartTitle)
        setLoading(false);
      } else {
        setLoading(false);
        setError({ error: "Empty response from API", message: "Oops, looks like no data returned" });
      }
    }).catch((error) => {
      setLoading(false);
      setError(error)
    })
  }, []);

  if (error) {
    return (<ErrorMessageContainer error={error} message={error.message} />)
  }

  if (!isLoading && barChartData) {
    const options = {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
        },
        title: {
          display: true,
          text: title,
        },
      },
    };
    const chartData = {
      labels: barChartData.map(e => e.assetClass),
      datasets: [{
          label: 'Avg Interest by Asset Class',
          data: barChartData.map(e => e.avgInterest),
          backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }]
    };
    return (
      <Bar options={options} data={chartData} />
    )
  } else {
    return (<div className='text-white'> ...loading data</div>)
  }
}

export default InterestChartCard;
