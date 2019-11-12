import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

let data = [];
data =  require('./../../../fullworking1.json');

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
          categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'],
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

    let powerData = [];

    data.forEach(function(item) {
      // energy_manifold.push(item.energy);
      // moneyfold.push(parseFloat(item.amount.slice(1)));
      if (item.start.substring(0, 3) === "9/1") {
        powerData.push(item.power);
      }
    })

    this.state.series = powerData;
    // const apexBarChartData = [{
    //   power: powerData,
    // }];

    return (
        <React.Fragment>
          <ReactApexChart
              options={this.state.options}
              series={this.state.series}
              type="area"
              width="100%"
              height="300" />
        </React.Fragment>
    );
  }
}

export default Apexarea;