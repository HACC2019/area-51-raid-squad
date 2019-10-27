import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Apexchart3 extends Component {


    constructor(props) {
        super(props);

        this.state = {
            apexBarChartOpt: {
                chart: {
                    type: 'line',
                    foreColor: '#9f9ea4',
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
                  colors: ['#47bd9a'],
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
            data: [10, 36, 12, 44, 63, 24, 44, 12, 56, 24]
          }];

        return (
            <React.Fragment>
                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData} type="area" height="60" />
            </React.Fragment>
        );
    }
}

export default Apexchart3;   