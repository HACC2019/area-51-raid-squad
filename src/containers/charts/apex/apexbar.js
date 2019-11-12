import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import { Button } from 'reactstrap';

const data = require('./../../../Data_HACC.json');

class Apexbar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data_mode: 'energy',
            apexBarChartOpt: {
                chart: {
                    type: 'bar',
                    foreColor: '#000000',
                    toolbar: {
                      show: false,
                    }
                  },
                  plotOptions: {
                    bar: {
                      columnWidth: '70%',
                      endingShape: 'flat'
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
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug','Sep', 'Oct', 'Nov', 'Dec'],
                  },
                  colors: ['#e74c5e'],
                
                  fill: {
                    type: 'gradient',
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

    onEnergyPress = () => {
      this.setState({
        data_mode: 'energy'
      });
    }

    onMoneyPress = () => {
      this.setState({
        data_mode: 'money'
      });
    }

    render() {

        // Initialize data stores
        let energy_manifold = [];
        let moneyfold = [];

        data.forEach(function(item) {
          energy_manifold.push(item.energy);
          moneyfold.push(parseFloat(item.amount.slice(1)));
        })

        let toshow = (this.state.data_mode === 'energy' ? energy_manifold : moneyfold);
       

        const apexBarChartData = [{
            name: this.state.data_mode,
            data: toshow.slice(50, 71),
          }];

        return (1
            <React.Fragment>
              <div className="btn-group" data-toggle="buttons" role="group" aria-label="Data View">
              <Button color="secondary" onClick={this.onEnergyPress}>Energy</Button>{' '}
              <Button color="secondary" onClick={this.onMoneyPress}>Revenue</Button>{' '}
              </div>


                <ReactApexChart options={this.state.apexBarChartOpt} series={apexBarChartData}  width="100%" height="265"  type="bar"  />
            </React.Fragment>
        );
    }
}

export default Apexbar;   