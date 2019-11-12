import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

const data =  require('./../../../fullworking2.json');

class Apexarea extends Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          type: 'area',
          foreColor: '#000000', // adjusts the text of the charts
          toolbar: {
            show: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: ['#4090cb'],
        xaxis: {
          categories: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            }
          }
        },
      },
      series : [{
        name: 'Power',
        data: [22, 54, 42, 84, 48, 38, 23, 21, 95, 42, 65, 45, 35, 68, 34, 13, 10, 12, 34, 97, 23, 22, 23]
      }]
    }
  }

  render() {

    let dayData = [];

    let segmentedData = Array(7).fill(0).map(x => Array(24).fill(0).map(x => Array()));

    // console.log(segmentedData);
    data.forEach(function(item) {
      let day = parseInt(item.start[2]) - 1;

      let time = item.start.substring(item.start.length-5, item.start.length - 3);
      if (time[0] === ' ') {
        time = time.replace(' ', '0');
      }

      let hour = parseInt(time);
      segmentedData[day][hour].push(item.power);
    });

    for (let i = 0; i < segmentedData[6].length; i++) {
      let total = 0;
      for (let j = 0; j < segmentedData[6][i].length; j++) {
        total += segmentedData[6][i][j];
      }
      let average = Math.round(((total / 60) * 100)) / 100;
      dayData.push(average);
    }

    const apexChartData = [{
      name: 'power',
      data: dayData,
    }];



    return (
        <React.Fragment>
          <ReactApexChart
              options={this.state.options}
              series={apexChartData}
              type="area"
              width="100%"
              height="300" />
        </React.Fragment>
    );
  }
}

export default Apexarea;