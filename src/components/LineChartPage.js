import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

export class LineChartPage extends Component {
    constructor(props){
        super(props);

        function getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.state = {
            dataFirstChart: {
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                    {
                        label: "Videos Made",
                        backgroundColor: "rgba(191, 63, 63, 0.8)",
                        data: [ 40, 5, 1, 10, 32, 2, 12]
                    },
                    {
                        label: "Subscriptions",
                        backgroundColor: "rgba(63, 63, 191, 0.6)",
                        data: [14, 15, 21, 0, 12, 4, 1]

                    }
                ]
            },
            optionsFirstChart: {
                responsive: true,
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: false
                }
            },
            dataSecondChart: {
                labels: ["1", "2", "3", "4", "5", "6","7", "8", "9", "10", "11","12", "13", "14", "15", "16","17", "18", "19", "20", "21","22", "23", "24", "25", "26","27", "28", "29", "30", "31"],
                datasets: [
                    {
                        label: 'May 2017',
                        data: [71,84,330,60,82,97,46,37,47,315,298,180,298,61,333,258,88,68,84,76,78,165,330,362,287,358,386,80,83,398,70],
                        borderWidth: 1,
                        backgroundColor: 'rgba(0,0,0,0.1)'
                    },
                    {
                        label: 'April 2017',
                        data: [83,375,390,272,356,363,426,383,312,94,317,98,104,233,119,111,254,441,406,374,426,260,409,111,377,367,215,104,379,266],
                        borderWidth: 2,
                        backgroundColor: 'rgba(247,205,101,1)'
                    }
                ]
            },
            optionsSecondChart: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                },
                tooltips: {
                    mode: 'nearest',
                    intersect: false
                },
                legend: {
                    position: "bottom",
                    labels: {
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 15
                    }
                }
            },
            chartData_3: {
                labels: ["Décembre 2016", "Janvier 2017", "Février 2017", "Mars 2017", "Avril 2017"],
                datasets: [{
                    label: "Total",
                    data: [6275,5199,3846,5510,8425],
                    borderWidth: 0.5,
                    backgroundColor: 'rgba(0,0,0,0.1)'
                },{
                    label: 'Avions hauts',
                    data: [1647,1472,1626,1908,2729],
                    borderWidth: 0.5,
                    backgroundColor: 'rgba(169,110,143,1)'
                },{
                    label: 'Avions bas',
                    data: [4628,3727,2220,3602,5696],
                    borderWidth: 0.5,
                    backgroundColor: 'rgba(219,160,193,1)'
                }
                ]
            },
            chartOptions_3: {
                legend: {
                    position: "bottom",
                    labels: {
                        fontFamily: "'Lato', sans-serif",
                        fontSize: 15,
                        fontColor: "#FFFFFF"
                    }
                }
            },

            chartData_4: {
                labels: [ "Q3-2013", "Q4-2013", "Q1-2014", "Q2-2014","Q3-2014", "Q4-2014", "Q1-2015", "Q2-2015",
                    "Q3-2015",
                    "Q4-2015",
                    "Q1-2016",
                    "Q2-2016",
                    "Q3-2016"
                ],
                datasets: [
                    {
                        type: "line",
                        label: "Data 1",
                        yAxisID: "y-axis-1",
                        backgroundColor: "#5B89C1",
                        borderColor: "#5B89C1",
                        pointBorderColor: "#5B89C1",
                        pointBackgroundColor: "#FFF",
                        pointHoverBackgroundColor: "#FFF",
                        pointStyle: "rectRot",
                        pointRadius: 8,
                        pointHoverRadius: 9,
                        data: [3.4, 3.35, 3.2, 3.6, 3.1, 3.2, 3.35, 3.45, 3.4, 3.4, 3.25, 3.3, 3.45]
                    },
                    {
                        type: "line",
                        label: "Data 2",
                        yAxisID: "y-axis-1",
                        backgroundColor: "#262626",
                        borderColor: "#262626",
                        fill: false,
                        pointBorderColor: "#262626",
                        pointBackgroundColor: "#FFF",
                        pointHoverBackgroundColor: "#FFF",
                        data: [3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5, 3.5]
                    }
                ],

            },
            chartOptions_4: {
                title: {
                    display: true,
                    text: "Chart Header for Sample 2"
                },
                legend: {
                    position: "bottom"
                },
                hover: {
                    mode: "point",
                    intersect: "true"
                },
                responsive: true,
                scales: {
                    xAxes: [
                        {
                            stacked: true
                        }
                    ],
                    label: [
                        {
                            fontStyle: "initial"
                        }
                    ],
                    yAxes: [
                        {
                            stacked: false,
                            position: "left",
                            id: "y-axis-1",
                            gridLines: {
                                drawOnChartArea: true
                            },
                            ticks: {
                                max: 3.7,
                                min: 2.8,
                                stepSize: 0.1
                            }
                        }
                    ]
                }
            }


};


    }

    render(){
        return(
          <div>
              <h2>Linechart Page</h2>
              <Line
                  options={this.state.optionsFirstChart}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.dataFirstChart}
              />
              <h3>Line Chart 2</h3>
              <Line
                  options={this.state.optionsSecondChart}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.dataSecondChart}
              />

              <h3>Line Chart 3</h3>
              <Line
                  options={this.state.chartOptions_3}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.chartData_3}
              />
              <h3>Line Chart 4</h3>
              <Line
                  options={this.state.chartOptions_4}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.chartData_4}
              />


          </div>
        );
    }
}

export default LineChartPage;