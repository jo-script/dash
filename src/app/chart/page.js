'use client'
import React, { useEffect, useState } from 'react';
// import Chart from 'react-apexcharts'

import dynamic from 'next/dynamic';

const Chart = dynamic(() => import('react-apexcharts'), { ssr: false });

const Donut = () => {


  useEffect(() => {
    document.title = 'ألتقارير'
    // setChartData()
  },[])
 

  const [chartData, setChartData] = useState({
    options1: {
      colors: ['#faa000', '#00E396', '#775DD0', '#FEB019', '#008FFB'], // Custom colors for the first chart
      labels: ['A', 'B', 'C', 'D', 'E'],
      chart: {
        fontFamily: 'Helvetica, Arial, sans-serif', // Setting the font style for the chart
        foreColor: '#333333', // Setting the font color for the chart
        fontSize: '30px', // Setting the font size for the chart

      }
    },
    series1: [44, 55, 41, 17, 44],
  })


  return (
    <div>
      {
        // setTimeout(() => {
          <Chart options={chartData.options1} series={chartData.series1} type="donut" width="380" />
        // }, 0)
      }
    </div>
  )
}

export default Donut


// class Donut extends Component {

//   constructor(props) {
//     super(props);

//     this.state = {
//       options: {},
//       series: [44, 55, 41, 17, 15],
//       labels: ['A', 'B', 'C', 'D', 'E']
//     }
//   }

//   render() {

//     return (
//       <div className="w-full h-[80vh] flex items-center justify-center flex-wrap gap-9 mt-10">
//         <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
//         <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
//         <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
//         <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
//       </div>
//     );
//   }
// }

// export default Donut;

