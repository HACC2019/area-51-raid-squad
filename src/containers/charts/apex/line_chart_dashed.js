import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class line_chart_dashed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apexBarChartOpt: {
               
              chart: {
                height: 380,
                type: 'line',
                foreColor: '#000000',
                zoom: {
                  enabled: false
                },
                toolbar: {
                  show: false,
              }
              },
              colors: ['#4090cb', '#e74c5e', '#47bd9a'],
              dataLabels: {
                enabled: false
              },
              stroke: {
                width: [3, 4, 3],
                curve: 'straight',
                dashArray: [0, 8, 5]
              },
              series: [{
                  name: "Session Duration",
                  data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
                },
                {
                  name: "Page Views",
                  data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
                },
                {
                  name: 'Total Visits',
                  data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
                }
              ],
              title: {
                text: 'Page Statistics',
                align: 'left'
              },
              markers: {
                size: 0,
          
                hover: {
                  sizeOffset: 6
                }
              },
              xaxis: {
                categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan', '08 Jan', '09 Jan',
                  '10 Jan', '11 Jan', '12 Jan'
                ],
              },
              tooltip: {
                y: [{
                  title: {
                    formatter: function (val) {
                      return val + " (mins)"
                    }
                  }
                }, {
                  title: {
                    formatter: function (val) {
                      return val + " per session"
                    }
                  }
                }, {
                  title: {
                    formatter: function (val) {
                      return val;
                    }
                  }
                }]
              },
              grid: {
                borderColor: '#f1f1f1',
              }
            }
        }
    }

    render() {
        const apexBarChartData = [{
          name: "Session Duration",
          data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10]
        },
        {
          name: "Page Views",
          data: [36, 42, 60, 42, 13, 18, 29, 37, 36, 51, 32, 35]
        },
        {
          name: 'Total Visits',
          data: [89, 56, 74, 98, 72, 38, 64, 46, 84, 58, 46, 49]
        }];

        return (
            <React.Fragment>
                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData} type="line" height="380" />
            </React.Fragment>
        );
    }
}

export default line_chart_dashed;   