import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Apexsocial extends Component {

    constructor(props) {
        super(props);
        this.state = {
            options: {
                chart: {
                  offsetY: -20
                },
                plotOptions: {
                    radialBar: {
                        offsetY: 10,
                        startAngle: 0,
                        endAngle: 270,
                        hollow: {
                            margin: 5,
                            size: '50%',
                            background: 'transparent',
                            image: undefined,
                        },
                        
                        dataLabels: {
                            name: {
                                show: false,
                                
                            },
                            value: {
                                show: false,
                            }
                        }
                    }
                },
                colors: ['#4090cb', '#06c2de', '#eb6776'],
               
                stroke: {
                    lineCap: 'round'
                  },
                  labels: ['Facebook', 'Twitter', 'Instagram'],
                  legend: {
                      show: true,
                      floating: true,
                      fontSize: '12px',
                      position: 'left',
                      offsetX: -30,
                      offsetY: 10,
                      labels: {
                          useSeriesColors: true,
                      },
                      markers: {
                          size: 0
                      },
                      formatter: function(seriesName, opts) {
                          return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
                      },
                      itemMargin: {
                          horizontal: 3,
                      }
                  },
                  responsive: [{
                    breakpoint: 480,
                    options: {
                        legend: {
                            show: false
                        }
                    }
                }]
              },
              series: [76,67,61],
        }
}

    render() {

        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height="265" />
            </React.Fragment>
        );
    }
}

export default Apexsocial;   