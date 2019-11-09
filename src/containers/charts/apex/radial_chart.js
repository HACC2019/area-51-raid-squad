import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class radial_chart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            chart: {
                height: 380,
                type: 'radialBar',
                foreColor: '#000000',
            },
            plotOptions: {
                radialBar: {
                    dataLabels: {
                        name: {
                            fontSize: '22px',
                        },
                        value: {
                            fontSize: '16px',
                        },
                        total: {
                            show: true,
                            label: 'Total',
                            formatter: function (w) {
                                return 249
                            }
                        }
                    }
                }
            },
            series: [44, 55, 67, 83],
            labels: ['Computer', 'Tablet', 'Laptop', 'Mobile'],
            colors: ['#4090cb', '#e74c5e', '#47bd9a', '#06c2de'],
        }
    }

    render() {
        
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.plotOptions} series={this.state.series} type="radialBar" height="355" />
            </React.Fragment>
        );
    }
}

export default radial_chart;   