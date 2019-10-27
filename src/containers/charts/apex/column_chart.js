import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class column_chart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apexBarChartOpt: {
                chart: {
                    height: 350,
                    type: 'bar',
                    foreColor: '#9f9ea4',
                    toolbar: {
                        show: false,
                    }
                },
                plotOptions: {
                    bar: {
                        horizontal: false,
                        columnWidth: '45%',
                        endingShape: 'rounded'	
                    },
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    show: true,
                    width: 2,
                    colors: ['transparent']
                },
             
                colors: ['#e74c5e', '#4090cb', '#47bd9a'],
                xaxis: {
                    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                },
                yaxis: {
                    title: {
                        text: '$ (thousands)'
                    }
                },
                grid: {
                    borderColor: '#f1f1f1',
                },
                fill: {
                    opacity: 1
            
                },
                tooltip: {
                    y: {
                        formatter: function (val) {
                            return "$ " + val + " thousands"
                        }
                    }
                }
              
            }
        }
    }

    render() {
        const apexBarChartData = [{
            name: 'Net Profit',
            data: [46, 57, 59, 54, 62, 58, 64, 60, 66]
        }, {
            name: 'Revenue',
            data: [74, 83, 102, 97, 86, 106, 93, 114, 94]
        }, {
            name: 'Free Cash Flow',
            data: [37, 42, 38, 26, 47, 50, 54, 55, 43]
        }];

        return (
            <React.Fragment>
                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData} type="bar" height="380" />
            </React.Fragment>
        );
    }
}

export default column_chart;   