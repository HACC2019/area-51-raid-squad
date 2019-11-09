import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Apexradial2 extends Component {

    constructor(props) {
        super(props);
        this.state = {
          options: {
            chart: {
              offsetY: -20,
              foreColor: '#000000',
            },
            plotOptions: {
              radialBar: {
                startAngle: -90,
                endAngle: 90,
                track: {
                    background: "#e7e7e7",
                    strokeWidth: '97%',
                    margin: 5, // margin is in pixels
                    shadow: {
                        enabled: true,
                        top: 2,
                        left: 0,
                        color: '#999',
                        opacity: 1,
                        blur: 2
                    }
                },
                dataLabels: {
                    name: {
                        show: false
                    },   
                    value: {
                        offsetY: 10,
                        fontSize: '20px'
                    }                     
                }
              }
            },
            colors: ['#e74c5e'],
            fill: {
                type: 'gradient',
                gradient: {
                    shade: 'dark',
                    type: 'horizontal',
                    shadeIntensity: 0.4,
                    gradientToColors: [ '#4090cb'],
                    inverseColors: false,
                    opacityFrom: 0.85,
                    opacityTo: 0.85,
                    stops: [0, 100]
                },
            },
            labels: ['Average Results'],
          },
          series: [68],
        }
}

    render() {
        return (
            <React.Fragment>
                <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height="210" />
            </React.Fragment>
        );
    }
}

export default Apexradial2;   