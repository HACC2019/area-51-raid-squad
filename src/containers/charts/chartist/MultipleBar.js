import React , {Component } from 'react';
import ChartistGraph from 'react-chartist';

class MultipleBar extends Component{

render(){
      var data = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
      ]
    };

    var options = {
      seriesBarDistance: 15
    };

    return(
            <React.Fragment>
                  <ChartistGraph data={data} options={options} style={{ height : "300px" }} type='Bar' />
            </React.Fragment>
        );
    }
}

export default MultipleBar;   