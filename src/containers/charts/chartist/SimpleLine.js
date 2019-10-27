import React , {Component } from 'react';
import ChartistGraph from 'react-chartist';

class SimpleLine extends Component{
   
render(){

    var simpleLineChartData = {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        series: [
          [12, 9, 7, 8, 5],
          [2, 1, 3.5, 7, 3],
          [1, 3, 4, 5, 6]
        ]
      }

    return(
            <React.Fragment>
                 <ChartistGraph data={simpleLineChartData} style={{ height : "300px" }} type={'Line'} /> 
            </React.Fragment>
        );
    }
}

export default SimpleLine;   