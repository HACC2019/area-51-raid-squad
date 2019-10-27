import React , {Component } from 'react';
import {Bar} from 'react-chartjs-2';

class BarChart extends Component{

render(){
    const data = {
        labels: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August'
        ],
        datasets: [{
         label: 'Sales Analytics',
          data: [65,59,80,81,56,89,40,32,65,59,80,81],
          backgroundColor: ['#ec707e','#ec707e','#ec707e','#ec707e','#ec707e','#ec707e','#ec707e','#ec707e'],
          hoverBackgroundColor: ['#02a461','#02a461','#02a461','#02a461','#02a461','#02a461','#02a461','#02a461']
        }]
      };
      
      const option = {
        tootlbar:{
          show: false
        },
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
             <Bar data={data} options={option}/>
            </React.Fragment>
        );
    }
}

export default BarChart;   