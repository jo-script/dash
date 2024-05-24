'use client'
import React, { Component } from 'react';
import Chart from 'react-apexcharts'

class Donut extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {},
      series: [44, 55, 41, 17, 15],
      labels: ['A', 'B', 'C', 'D', 'E']
    }
  }

  render() {

    return (
      <div className="w-full h-[80vh] flex items-center justify-center flex-wrap gap-9 mt-10">
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
        <Chart options={this.state.options} series={this.state.series} type="donut" width="380" />
      </div>
    );
  }
}

export default Donut;