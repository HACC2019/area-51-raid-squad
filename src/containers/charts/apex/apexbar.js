import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';

class Apexbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            apexBarChartOpt: {
                chart: {
                    type: 'bar',
                    foreColor: '#9f9ea4',
                    toolbar: {
                      show: false,
                    }
                  },
                  plotOptions: {
                    bar: {
                      columnWidth: '14%',
                      endingShape: 'rounded'
                    }
                  },
                  dataLabels: {
                    enabled: false
                  },grid: {
                    yaxis: {
                      lines: {
                        show: false,
                      }
                    }
                  },
                  xaxis: {
                    labels: {
                      rotate: -90
                    },
                    //needs data
                    categories: ['09/01', '09/02', '09/03', '09/04', '09/05', '09/06', '09/07', '09/08','09/09', '09/10', '09/11', '09/12'],
                  },
                  colors: ['#4090cb'],
                
                  fill: {
                    type: 'solid',
                    gradient: {
                      shade: 'dark',
                      type: "vertical",
                      shadeIntensity: 1,
                      gradientToColors: [ '#4090cb'],
                      inverseColors: true,
                      opacityFrom: 0.85,
                      opacityTo: 0.85,
                      stops: [0, 100, 100, 100]
                    },
                  },
            }
        }
    }

    render() {
        const apexBarChartData = [{
          //needs data
            name: 'Total revenue made',
            data: [218, 115, 223, 109, 124, 217, 90, 0, 0, 0, 0, 0]
          }];

        return (
            <React.Fragment>
                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData}  width="100%" height="299"  type="bar"  />
            </React.Fragment>
        );
    }
}

export default Apexbar;   