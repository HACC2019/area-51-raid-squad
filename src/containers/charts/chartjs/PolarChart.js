import React , {Component } from 'react';
import {Polar} from 'react-chartjs-2';

class PolarChart extends Component{

render(){
    const data = {
        labels: ["Direct", "Affilliate", "Sponsored", "E-mail"],
        datasets: [{
         label: 'Sales Analytics',
          data: [251, 135, 48, 154],
          backgroundColor: ["#4090cb", "#4090cb", "#4090cb", "#f2f2f2"],
          hoverBackgroundColor: ["#4090cb", "#4090cb", "#4090cb", "#f2f2f2"],
        }]
      };
      
      const option = {
        tooltips: {
          callbacks: {
            label: function(tooltipItem, data) {
              var dataset = data.datasets[tooltipItem.datasetIndex];
              var meta = dataset._meta[Object.keys(dataset._meta)[0]];
              var total = meta.total;
              var currentValue = dataset.data[tooltipItem.index];
              var percentage = parseFloat((currentValue/total*100).toFixed(1));
              return currentValue + ' (' + percentage + '%)';
            },
            title: function(tooltipItem, data) {
              return data.labels[tooltipItem[0].index];
            }
          }
        }
      }

    return(
            <React.Fragment>
                <Polar data={data} options={option} />
            </React.Fragment>
        );
    }
}

export default PolarChart;   