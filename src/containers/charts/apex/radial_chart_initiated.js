import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

const data = require('./../../../Data_HACC');

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
            labels: ['Device', 'Mobile', 'Web'],
            colors: ['#b19cd9', '#77dd77', '#aec6cf'],
        }
    }

    render() {

      let mobileCount = 0;
      let deviceCount = 0;
      let webCount = 0;

      data.forEach(function(item) {
        if(item.initiated === 'DEVICE'){
          deviceCount++;
        } else if(item.initiated === 'MOBILE'){
          mobileCount++;
        } else {
          webCount++;
        }

      });

      mobileCount = Math.round(mobileCount / data.length * 10000) /100;
      deviceCount = Math.round(deviceCount / data.length * 10000) /100;
      webCount = Math.round(webCount / data.length * 10000) /100;

      const apexBarRadialData =
          {
            series: [mobileCount, deviceCount, webCount],
            labels: ['Mobile', 'Device', 'Web'],
            colors: ['#b19cd9', '#77dd77', '#aec6cf'],
          };

      return (
            <React.Fragment>
                <ReactApexChart options={apexBarRadialData} series={apexBarRadialData.series}
                                type="radialBar"
                                height="355" />
            </React.Fragment>
        );
    }
}

export default radial_chart;   