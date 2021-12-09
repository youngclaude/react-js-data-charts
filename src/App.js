import React, {Component} from 'react';
import { Line, Bar, Doughnut, HorizontalBar, Pie  } from 'react-chartjs-2';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LineChartPage from "./components/LineChartPage";
import LeftNavBar from "./components/LeftNavBar";
import BarChartPage from "./components/BarChartPage";
import HorizontalBarChartPage from "./components/HorizontalBarChartPage";
import PieChartPage from "./components/PieChartPage";
import Dashboard from "./components/Dashboard";

// Theres a new boss in town

class App extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: {
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                    {
                        label: "Videos Made",
                        backgroundColor: "rgba(166,61,91, 0.7)", // Add color with opacity as the final value
                        data: [4, 5, 1, 10, 32, 2, 12]
                    },
                    {
                        label: "Subscriptions",
                        backgroundColor: "rgba(255,115,64,0.7)",
                        data: [14, 15, 21, 0, 12, 4, 1]

                    }
                ]
            },
            options: {
                responsive: true,
                tooltips: {
                    mode: 'nearest',
                    intersect: false
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        };
    }

    // Function here would be uses for data manipulation if need be
    getChartData = canvas => {
        const data = this.state.data;

        return data;
    }

  render() {
      return (
          <Router>
              <>

              <Route exact path="/" render={() =>(
                  <div className="row">
                      <div className="col s3 offset-s2">
                          <LeftNavBar />
                      </div>
                      <div className="col s6">
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
                      </div>
                  </div>
              )}/>

              <Route exact path="/line" render={() =>(
                  <div className="row">
                      <div className="col s3 offset-s2">
                          <LeftNavBar />
                      </div>
                      <div className="col s6">
                          <LineChartPage />
                      </div>
                  </div>
              )}/>

              <Route exact path="/bar" render={() =>(
                  <div className="row">
                      <div className="col s3 offset-s2">
                          <LeftNavBar />
                      </div>
                      <div className="col s6">
                          <BarChartPage />
                      </div>
                  </div>
              )}/>

              <Route exact path="/horizontal-bar" render={() =>(
                  <div className="row">
                      <div className="col s3 offset-s2">
                          <LeftNavBar />
                      </div>
                      <div className="col s6">
                          <h3>Horizontal Bar Chart</h3>
                          <div className="ibox-content">
                          <HorizontalBarChartPage />
                          </div>
                      </div>
                  </div>
              )}/>

              <Route exact path="/pie" render={() =>(
                  <div className="row">
                      <div className="col s3 offset-s2">
                          <LeftNavBar />
                      </div>
                      <div className="col s6">
                          <h3>Pie Chart</h3>
                          <div className="ibox-content">
                            <PieChartPage />
                          </div>
                      </div>
                  </div>
              )}/>

              <Route exact path="/moch-dashboard" render={() =>(
                  <div className="row">
                      <div className="col s1">
                          <LeftNavBar />
                      </div>
                      <div className="col s8 offset-s2">
                          <h3>Dashboard Overview</h3>
                            <Dashboard />

                      </div>
                  </div>
              )}/>
              </>

          </Router>
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
