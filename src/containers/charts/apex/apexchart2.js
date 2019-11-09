import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Apexchart2 extends Component {


    constructor(props) {
        super(props);

        this.state = {
            apexBarChartOpt: {
                chart: {
                    type: 'line',
                    foreColor: '#000000',
                    height: 60,
                    sparkline: {
                      enabled: true
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },
                  stroke: {
                    curve: 'smooth',
                    width: 3
                  },
                  colors: ['#e74c5e'],
                  marker: {
                    show: false
                  },
                  tooltip: {
                    fixed: {
                      enabled: false
                    },
                    x: {
                      show: false
                    },
                    y: {
                      title: {
                        formatter: function (seriesName) {
                          return ''
                        }
                      }
                    },
                    marker: {
                      show: false
                    }
                  }
        }
    }
}

    render() {
        const apexBarChartData = [{
            data: [54, 12, 24, 66, 42, 25, 44, 12, 36, 9]
          }];

        return (
            <React.Fragment>
                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData} type="area" height="60" />
            </React.Fragment>
        );
    }
}

export default Apexchart2;   