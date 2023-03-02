import React from 'react';
import { useState, useEffect } from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const TransactionsChart = ({}) => {
    const [isLoading, setLoading]= useState(false);
    const [barChartData,setData] = useState([]);
    const [title, setTitle] = useState('');
    const [error,setError]  = useState(null);
    useEffect(() => {
        setLoading(true);
        const accessToken = sessionStorage.getItem("accessToken");
        fetch('http://localhost:8080/api/transactions/get-transaction-stats-by-date', {
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
                setError({ error: "Empty response from API", message: "Oops, looks like no data returned"});
            }
        }).catch((error) => {
            setLoading(false);
            setError(error)
        })
    }, []);

    if (error) {
        return ( <ErrorMessageContainer error={error} message={error.message}/>)
    }
    if (!isLoading && barChartData) {
        const chartData = {
            labels: barChartData.map(e => e.date) || [],
            datasets: [
                {
                    label: 'Requests Hourly',
                    data: barChartData.map(e => e.count) || [] ,
                    borderColor: 'rgb(255, 99, 132)',
                    backgroundColor: 'rgba(255, 99, 132, 0.5)',
                    yAxisID: 'y',
                  },
            ]
        };
    
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
        return (
            <Line options={options} data={chartData} />
        )
    } else {
        return ( <div> ...loading data</div>)
    }


}

export default TransactionsChart;
