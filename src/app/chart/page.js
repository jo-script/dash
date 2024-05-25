'use client'
import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });


const Donut = () => {
  useEffect(() => {
    document.title = 'التقارير'
  },[])

  const [chartData, setChartData] = useState({
    options1: {
      colors: ['#faa000', '#00E396', '#775DD0', '#FEB019', '#008FFB'], // Custom colors for the first chart
      labels: ['A', 'B', 'C', 'D', 'E'],
      chart: {
        fontFamily: 'Helvetica, Arial, sans-serif', // Setting the font style for the chart
        foreColor: '#333333', // Setting the font color for the chart
        fontSize: '30px' // Setting the font size for the chart
      }
    },
    series1: [44, 55, 41, 17, 44], // Data for the first chart
    options2: {
      colors: ['#FF4560', '#00E396', '#4CAF50', '#008FFB', '#775DD0'], // Custom colors for the second chart
      labels: ['F', 'G', 'H', 'I', 'J'],
      chart: {
        fontFamily: 'Helvetica, Arial, sans-serif', // Setting the font style for the chart
        foreColor: '#333333', // Setting the font color for the chart
        fontSize: '30px' // Setting the font size for the chart
      }
    },
    series2: [21, 59, 75, 20, 20], // Data for the second chart
    options3: {
      colors: ['#FF6347', '#4682B4', '#32CD32', '#FFD700', '#6A5ACD'], // Custom colors for the third chart
      labels: ['K', 'L', 'M', 'N', 'O'],
      chart: {
        fontFamily: 'Helvetica, Arial, sans-serif', // Setting the font style for the chart
        foreColor: '#333333', // Setting the font color for the chart
        fontSize: '30px' // Setting the font size for the chart
      }
    },
    series3: [65, 40, 80, 30, 70], // Data for the third chart
    options4: {
      colors: ['#20B2AA', '#FF4500', '#800080', '#00CED1', '#C71585'], // Custom colors for the fourth chart
      labels: ['P', 'Q', 'R', 'S', 'T'],
      chart: {
        fontFamily: 'Helvetica, Arial, sans-serif', // Setting the font style for the chart
        foreColor: '#333333', // Setting the font color for the chart
        fontSize: '30px' // Setting the font size for the chart
      }
    },
    series4: [50, 60, 70, 40, 50] // Data for the fourth chart
  });

  return (
    <div className='w-full h-[90vh] items-center justify-center flex-wrap gap-10'>
      <Chart options={chartData.options1} series={chartData.series1} type="donut" width="380" />
      <Chart options={chartData.options2} series={chartData.series2} type="donut" width="380" />
    </div>
  );
}

export default Donut;