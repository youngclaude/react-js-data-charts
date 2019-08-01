import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

export class LineChartPage extends Component {
    constructor(props){
        super(props);


        function getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.state = {
            data: {
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                    {
                        label: "Videos Made",
                        backgroundColor: "rgb(191, 63, 63)",
                        data: [getRandomInt(50, 200), 5, 1, 10, 32, 2, 12]
                    },
                    {
                        label: "Subscriptions",
                        backgroundColor: "rgb(63, 63, 191)",
                        data: [14, 15, 21, 0, 12, 4, 1]

                    }
                ]
            },
            options: {
                responsive: true,
                tooltips: {
                    enabled: false
                }
            }
        };
    }

    render(){
        return(
          <div>
              <h2>Linechart Page</h2>
              <Line
                  options={this.state.options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.data}
              />
          </div>
        );
    }
}

export default LineChartPage;