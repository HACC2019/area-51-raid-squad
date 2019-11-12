import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

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
                colors: ['#b19cd9', '#77dd77'],
                xaxis: {
                    categories: ['Sun', 'Mon', 'Tues', 'Thurs', 'Fri', 'Sat'],
                },
                grid: {
                    yaxis: {
                        lines: {
                            show: true,
                        }
                    }
                },
              yaxis: {
                show: true,
                title: {
                  text: "Money (Dollars)",
                }
              },
              xaxis: {
                show: true,
                title: {
                  text: "Time (Days)",
                }
              }
            },
                series: [{
                    name: 'siteA Revenue',
                    data: [22, 54, 42, 84, 48, 56, 78]
                }, {
                    name: 'siteB Revenue',
                    data: [11, 32, 60, 32, 34, 34, 54]
                }]
            }
        }

    render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" width="100%" height="300" />
            </React.Fragment>
        );
    }
}

export default Apexarea;   