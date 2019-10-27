import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Pie_chart extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apexBarChartOpt: {
                chart: {
                    height: 320,
                    type: 'pie',
                    foreColor: '#9f9ea4',
                }, 
                series: [44, 55, 41, 17, 15],
                labels: ["Series 1", "Series 2", "Series 3", "Series 4", "Series 5"],
                colors: ["#a3cae0", "#4090cb","#e74c5e", "#f9d570", "#47bd9a"],
                legend: {
                    show: true,
                    position: 'bottom',
                    horizontalAlign: 'center',
                    verticalAlign: 'middle',
                    floating: false,
                    fontSize: '14px',
                    offsetX: 0,
                    offsetY: -10
                },
                responsive: [{
                    breakpoint: 600,
                    options: {
                        chart: {
                            height: 240
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
        const apexBarChartData = [44, 55, 41, 17, 15];

        return (
            <React.Fragment>
                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData} type="pie" height="320" />
            </React.Fragment>
        );
    }
}

export default Pie_chart;   