import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class spline_area extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apexBarChartOpt: {
                chart: {
                    height: 350,
                    type: 'area',
                    foreColor: '#000000',
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'smooth',
                    width: 3,
                },
                colors: ['#4090cb', '#e74c5e'],
                xaxis: {
                    type: 'datetime',
                    categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],                
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
                tooltip: {
                    x: {
                        format: 'dd/MM/yy HH:mm'
                    },
                }
              
            }
        }
    }

    render() {
        const apexBarChartData = [{
            name: 'series1',
            data: [34, 40, 28, 52, 42, 109, 100]
        }, {
            name: 'series2',
            data: [32, 60, 34, 46, 34, 52, 41]
        }];

        return (
            <React.Fragment>
                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData} type="area" height="380" />
            </React.Fragment>
        );
    }
}

export default spline_area;   