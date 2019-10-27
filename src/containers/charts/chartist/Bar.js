import React , {Component } from 'react';
import ChartistGraph from 'react-chartist';

class Bar extends Component{

   
render(){
    var data = {
        labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
        series: [
          [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
        ]
      };
   
      var options = {
        high: 10,
        low: -10,
        axisX: {
          labelInterpolationFnc: function(value, index) {
            return index % 2 === 0 ? value : null;
          }
        }
      };
   
      var type = 'Bar'

    return(
            <React.Fragment>
                  <ChartistGraph data={data} style={{ height : "300px" }} options={options} type={type} />
            </React.Fragment>
        );
    }
}

export default Bar;   