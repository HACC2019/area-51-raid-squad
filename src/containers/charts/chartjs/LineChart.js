import React , {Component } from 'react';
import {Line} from 'react-chartjs-2';

class LineChart extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

render(){
const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July','August'],
  datasets: [
    {
        label: 'Sales Analytics',
        fill: false,
        backgroundColor: '#007bff40',
        borderColor: '#4090cb',
        borderCapStyle: 'butt',
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: 'round',
        pointBorderColor: '#4090cb',
        pointBackgroundColor: '#007bff40',
        pointBorderWidth: 1.5,
        pointHitRadius : 20,
        lineTension: 0.5,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: '#4090cb',
        pointHoverBorderColor: '#4090cb',
        pointHoverBorderWidth: 2,
        data: [65, 59, 80, 45, 56, 35, 40, 50, 59, 80, 81]
    }
  ]
};
    var option = {
        showLines: true,
        allowDataOverflow : true
    }
    return(
            <React.Fragment>
                <Line width={600} height={300} data={data} options={option}/>
            </React.Fragment>
        );
    }
}

export default LineChart;   