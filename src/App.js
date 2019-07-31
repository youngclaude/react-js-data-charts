import React, {Component} from 'react';
import { Line, Bar, Doughnut, HorizontalBar, Pie  } from 'react-chartjs-2'

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: {
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                    {
                        label: "Videos Made",
                        backgroundColor: "rgba(255, 0, 255, 0.75)",
                        data: [4, 5, 1, 10, 32, 2, 12]
                    },
                    {
                        label: "Subscriptions",
                        backgroundColor: "rgba( 0, 255, 0, 0.75)",
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

    getChartData = canvas => {
        const data = this.state.data;

        return data;
    }

  render() {
      return (
          <div style={containerStyle}>
              <h2>Charts Js Samples</h2>
              <h4>Line Chart</h4>
              <Line
                  options={this.options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.getChartData}
              />

              <h4>Bar Chart</h4>
              <Bar
                  options={this.options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.getChartData}
              />

              <h4>Horizontal Bar Chart</h4>
              <HorizontalBar
                  options={this.options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.getChartData}
              />

              <h4>Doughnut Chart</h4>
              <Doughnut
                  options={this.options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.getChartData}
              />
          </div>
      );
  }
}

const containerStyle ={
    position: "relative",
    width: 600,
    height: 550,
    textAlign: '-webkit-center'
}

export default App;
