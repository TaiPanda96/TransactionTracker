import React from 'react';
import { useState, useEffect } from 'react';
import ErrorMessageContainer from '../Messages/Error'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
ChartJS.register(
    ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const DoughnutChart = ({}) => {
    const [isLoading, setLoading]= useState(false);
    const [barChartData,setData] = useState([]);
    const [title, setTitle] = useState('');
    const [error,setError]  = useState(null);
    useEffect(() => {
        setLoading(true);
        const accessToken = sessionStorage.getItem("accessToken");
        fetch('http://localhost:8080/api/transactions/get-asset-stats', {
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
            labels: barChartData.map(e => e._id),
            datasets: [{
                label: 'Asset Classes',
                data: barChartData.map(e => e.count),
                backgroundColor: [
                  'rgb(173,255,47)',
                  'rgb(54, 162, 235)',
                  'rgb(230,230,250)',
                  'rgb(128,0,0)',
                  'rgb(255,245,238)',
                ],
                hoverOffset: 4
              }]
        };
    
        const options = {
            responsive: true,
            plugins: {
              legend: {
                position: 'top',
              },
              title: {
                display: true,
                text: title || 'Bar Chart',
              },
            },
        };
        return (
            <Doughnut options={options} data={chartData} />
        )
    } else {
        return ( <div> ...loading data</div>)
    }


}

export default DoughnutChart;
