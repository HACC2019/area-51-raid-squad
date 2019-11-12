import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

const data = require('./../../../fullworking1.json');

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
                colors: ['#4090cb', '#e74c5e'],
                xaxis: {
                    categories: ['1', '2', '3', '4', '5'],
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
                    name: 'Series 1',
                    data: [22, 54, 42, 84, 48]
                }, {
                    name: 'Series 2',
                    data: [11, 32, 60, 32, 34]
                }]
            
            }
        }

    render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="area" width="100%" height="299" />
            </React.Fragment>
        );
    }
}

export default Apexarea;   