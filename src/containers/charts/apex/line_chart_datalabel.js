import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class line_chart_datalabel extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apexBarChartOpt: {
                chart: {
                    height: 380,
                    type: 'line',
                    foreColor: '#9f9ea4',
                    zoom: {
                      enabled: false
                    },
                    toolbar: {
                      show: false
                    }
                  },
                  colors: ['#4090cb', '#e74c5e'],
                  dataLabels: {
                    enabled: true,
                  },
                  stroke: {
                    width: [3, 3],
                    curve: 'straight'
                  },
                 
                  title: {
                    text: 'Average High & Low Temperature',
                    align: 'left'
                  },
                  grid: {
                    row: {
                      colors: ['transparent', 'transparent'], // takes an array which will be repeated on columns
                      opacity: 0.2
                    },
                    borderColor: '#f1f1f1'
                  },
                  markers: {
                    style: 'inverted',
                    size: 6
                  },
                  xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    title: {
                      text: 'Month'
                    }
                  },
                  yaxis: {
                    title: {
                      text: 'Temperature'
                    },
                    min: 5,
                    max: 40
                  },
                  legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                  },
                  responsive: [{
                    breakpoint: 600,
                    options: {
                      chart: {
                        toolbar: {
                          show: false
                        }
                      },
                      legend: {
                        show: false
                      },
                    }
                  }] 
            }
        }
    }

    render() {
        const apexBarChartData = [{
            name: "High - 2018",
            data: [26, 24, 32, 36, 33, 31, 33]
          },
          {
            name: "Low - 2018",
            data: [14, 11, 16, 12, 17, 13, 12]
          }];

        return (
            <React.Fragment>
                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData} type="line" height="380" />
            </React.Fragment>
        );
    }
}

export default line_chart_datalabel;   