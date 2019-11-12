import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { parseGeoJSON } from 'echarts/src/export';

const data =  require('./../../../fullworking2.json');

class Apexarea extends Component {

  constructor(props) {
    super(props);
    this.getHourAverage = this.getHourAverage.bind(this);

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
          categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17',
            '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30' ],
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


  getHourAverage = (dayData) => {
    // Returns an array containing the average of each hour of a day
    let hourAverages = [];
    for (let i = 0; i < dayData.length; i++) {
      let total = 0;
      for (let j = 0; j < dayData[i].length; j++) {
        total += dayData[i][j];
      }
      let average = Math.round(((total / 60) * 100)) / 100;
      hourAverages.push(average);
    }

    return hourAverages;
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

    let weekData = [];
    let bigTotal = 0;
    for (let h = 0; h < segmentedData.length; h++) {
      let temp = this.getHourAverage(segmentedData[h])
      let sum = temp.reduce((previous, current) => current += previous);
      // values = values.reduce((previous, current) => current += previous);
      weekData.push(Math.round(sum/temp.length * 100) / 100);
    }

    for(let i = 7; i < 30; i++){
      weekData.push(weekData[i%7]);
    }

    //   for (let k = 0; k <= dayData.length; k++) {
    //     bigTotal += dayData[k];
    //   }
    //   dayData = [];
    //   let num = (Math.round(bigTotal * 100 / dayData.length) / 100);
    //   weekData.push(num);
    //   console.log(weekData);
    // }

    // let bigTotal = 0;
    // let total = 0;
    // for (let i = 0; i < segmentedData[6].length; i++) {
    //   for (let j = 0; j < segmentedData[6][i].length; j++) {
    //     total += segmentedData[6][i][j];
    //   }
    //    bigTotal += Math.round(((total / 60) * 100)) / 100;
    // }
    // bigTotal = Math.round((bigTotal / segmentedData.length)* 100) / 100;
    // console.log(bigTotal);
    //
    // let day = 0;
    // let totalDay = 0;
    // let week = [];
    // let round_num = 0;
    //
    // for(let i = 0; i < segmentedData.length; i++){
    //   for(let j = 0; j < segmentedData[i].length; j++){
    //     for(let k = 0; k < segmentedData[i][j].length; k++){
    //       day += segmentedData[i][j][k];
    //       round_num++;
    //     }
    //   }
    //   totalDay +=
    // }

    const apexChartData = [{
      name: 'power',
      data: weekData,
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