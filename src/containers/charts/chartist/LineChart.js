import React , {Component } from 'react';
import ChartistGraph from 'react-chartist';

class LineChart extends Component{

   
render(){
    var data = {
        labels: ['1', '2', '3', '4', '5', '6'],
        series: [
          {
            data: [1, 2, 3, 5, 8, 13]
          }
        ]
      };
      
      /* Set some base options (settings will override the default settings in Chartist.js *see default settings*). We are adding a basic label interpolation function for the xAxis labels. */
      var options = {
        axisX: {
          labelInterpolationFnc: function(value) {  
            return 'Calendar Week ' + value;
          }
        }
      };
      
  

    return(
            <React.Fragment>
                    <ChartistGraph data={data} options={options} style={{ height : "300px" }} type='Line' />
            </React.Fragment>
        );
    }
}

export default LineChart;   