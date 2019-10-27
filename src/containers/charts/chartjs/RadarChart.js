import React , {Component } from 'react';
import {Radar} from 'react-chartjs-2';

class RadarChart extends Component{

  
render(){
    const data = {
        labels: ["Eating", "Drinking", "Sleeping", "Designing", "Coding", "Cycling", "Running"],
        datasets: [{
         label: 'Desktop',
          data: [65, 59, 90, 81, 56, 55, 40],
          backgroundColor: ['rgba(86, 194, 214, 0.3)'],
          hoverBackgroundColor: ['#56c2d6']
        },{
          label: 'Tablets',
           data: [28, 48, 40, 19, 96, 27, 100],
           backgroundColor: ['rgba(240, 100, 59,0.2)'],
           hoverBackgroundColor: ['#f0643b']
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
                <Radar data={data} options={option} />
            </React.Fragment>
        );
    }
}

export default RadarChart;   