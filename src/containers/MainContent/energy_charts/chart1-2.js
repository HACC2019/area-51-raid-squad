import React, { Component } from 'react';
import ReactApexChart from 'react-apexcharts';
import Firebase from 'firebase';

let query = Firebase.database().ref("Site_Power").orderByChild("island");
const data =  require('./../../../Data_HACC.json');

class Apexarea extends Component {

  constructor(props) {
    super(props);
    // this.getHourAverage = this.getHourAverage.bind(this);
    this.state = {
      siteData: [],
      options: {
        chart: {
          type: 'area',
          foreColor: '#000000', // adjusts the text of the charts
          toolbar: {
            show: false,
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth',
          width: 2
        },
        colors: ['#4090cb'],
        xaxis: {
          categories: ['1', '2', '3', '4', '5', '6', '7'],
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            }
          }
        },
      },
      series : [{
        name: 'Power',
        data: [22, 54, 42, 84, 48, 38, 23, 21, 95, 42, 65, 45, 35, 68, 34, 13, 10, 12, 34, 97, 23, 22, 23]
      }]
    }
  }

  componentDidMount() {
    this._isMounted = true;
    let temp = [];

    query.on('value', snapshot => {
      if (this._isMounted) {

        snapshot.forEach(function(childSnapshot) {
          let siteData = childSnapshot.val();
          temp.push(siteData);

        });
      }})

    this.setState({siteData: temp});
  }


  // getHourAverage = (dayData) => {
  //   // Returns an array containing the average of each hour of a day
  //   let hourAverages = [];
  //   for (let i = 0; i < dayData.length; i++) {
  //     let total = 0;
  //     for (let j = 0; j < dayData[i].length; j++) {
  //       total += dayData[i][j];
  //     }
  //     let average = Math.round(((total / 60) * 100)) / 100;
  //     hourAverages.push(average);
  //   }
  //
  //   return hourAverages;
  // }


  render() {

    // let dayData = [];
    //
    let segmentedData = Array(7).fill(0).map(x => Array(24).fill(0).map(x => Array()));

    // console.log(segmentedData);
    this.state.siteData[0].power.forEach(function(item) {
      let day = parseInt(item.start[2]) - 1;

      let time = item.start.substring(item.start.length-8, item.start.length - 7);
      if (time[0] === ' ') {
        time = time.replace(' ', '0');
      }

      let hour = parseInt(time);
      segmentedData[day][hour].push(item.energy);
    });

    // let weekData = [];
    // for (let h = 0; h < segmentedData.length; h++) {
    //   let temp = this.getHourAverage(segmentedData[h])
    //   console.log(temp);
    //   let sum = temp.reduce((previous, current) => current += previous);
    //   // values = values.reduce((previous, current) => current += previous);
    //   console.log(sum);
    //   console.log(temp.length);
    //   weekData.push(Math.round(sum/temp.length * 100) / 100);
    // }
    //
    // console.log("weekdata "  + weekData);
    //   for (let k = 0; k <= dayData.length; k++) {
    //     bigTotal += dayData[k];
    //   }
    //   dayData = [];
    //   let num = (Math.round(bigTotal * 100 / dayData.length) / 100);
    //   weekData.push(num);
    //   console.log(weekData);
    // }

    // let bigTotal = 0;
    // let total = 0;
    // for (let i = 0; i < segmentedData[6].length; i++) {
    //   for (let j = 0; j < segmentedData[6][i].length; j++) {
    //     total += segmentedData[6][i][j];
    //   }
    //    bigTotal += Math.round(((total / 60) * 100)) / 100;
    // }
    // bigTotal = Math.round((bigTotal / segmentedData.length)* 100) / 100;
    // console.log(bigTotal);
    //
    // let day = 0;
    // let totalDay = 0;
    // let week = [];
    // let round_num = 0;
    //
    // for(let i = 0; i < segmentedData.length; i++){
    //   for(let j = 0; j < segmentedData[i].length; j++){
    //     for(let k = 0; k < segmentedData[i][j].length; k++){
    //       day += segmentedData[i][j][k];
    //       round_num++;
    //     }
    //   }
    //   totalDay +=
    // }
   let weekData = 0;

    const apexChartData = [{
      name: 'energy',
      data: weekData,
    }];



    return (
        <React.Fragment>
          <ReactApexChart
              options={this.state.options}
              series={apexChartData}
              type="area"
              width="100%"
              height="300" />
        </React.Fragment>
    );
  }
}

export default Apexarea;