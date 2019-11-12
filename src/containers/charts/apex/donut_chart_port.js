import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

const data = require('./../../../Data_HACC.json');

class donut_chart_port extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apexBarChartOpt: {
                chart: {
                    height: 320,
                    type: 'donut',
                    foreColor: '#9f9ea4',
                },
                plotOptions: {
                  pie: {
                    donut: {
                      size: '40%'
                    }
                  }
                },
                series: [44, 55, 41, 17, 15],
                labels: ["CHADEMO", "COMBO"],
                colors: ["#b19cd9", "#77dd77"],
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

      let chademoCount = 0;
      let comboCount = 0;
      data.forEach(function(item) {
        if(item.port === 'CHADEMO'){
          chademoCount++;
        } else {
          comboCount++;
        }
      });


        const apexBarChartData = [chademoCount, comboCount];


        return (
            <React.Fragment>
                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData} type="donut" height="320" />
            </React.Fragment>
        );
    }
}

export default donut_chart_port;