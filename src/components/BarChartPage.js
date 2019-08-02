import React, {Component} from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js';
import 'chartjs-plugin-labels';

export class BarChartPage extends Component {
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
                        data: [getRandomInt(50, 200), getRandomInt(20, 50), 27, 10, 32, 2, 12]
                    },
                    {
                        label: "Subscriptions",
                        backgroundColor: "rgb(63, 63, 191)",
                        data: [159, getRandomInt(50, 200), 10, 12, 4, 1]

                    }
                ]
            },
            options: {
                responsive: true,
                tooltips: {
                    enabled: false
                },
                label: {
                    scaleLabel: false
                },
                plugins: {
                    labels: {
                        fontSize: 0
                    }
                }
            },
            chart2Data: {
                labels: ["2011", "2012", "2013", "2014", "2015", "2016", "2017"],
                datasets: [{
                    label: 'Label 1',
                    data: [1550, 1570, 2300, 5000, 7000, 8000, 20000],
                    backgroundColor: '#074F57'
                }, {
                    label: 'Label 2',
                    data: [0, 3630, 28200, 48809, 73700, 110700, 160791],
                    backgroundColor: '#077187'
                }, {
                    label: 'Label 3',
                    data: [0, 0, 0, 0, 0, 20100, 22000],
                    backgroundColor: '#7FB069'
                }]
            },
            chart2Options: {
                tooltips: {
                    enabled: false
                },
                responsive: true,
                legend: {
                    position: 'bottom',
                    fullWidth: true,
                    labels: {
                        boxWidth: 20,
                        padding: 50,
                        fontSize: 20,
                        fontFamily: 'Lato'
                    }
                },
                scales: {
                    xAxes: [{
                        barPercentage: 0.8,
                        gridLines: {
                            display: true,
                            drawTicks: true,
                            drawOnChartArea: false
                        },
                        ticks: {
                            fontSize: 16,
                            fontFamily: 'Lato'
                        },
                        stacked: true
                    }],
                    yAxes: [{
                        gridLines: {
                            display: true,
                            drawTicks: true,
                            tickMarkLength: 5,
                            drawOnChartArea: false
                        },
                        ticks: {
                            padding: 10,
                            beginAtZero: true,
                            fontSize: 16,
                            fontFamily: 'Lato',
                            callback: function(label, index, labels) {
                                return label/1000;
                            }
                        },
                        scaleLabel: {
                            display: true,
                            padding: 20,
                            fontColor: '#555759',
                            fontSize: 18,
                            fontFamily: 'Lato',
                            fontStyle: 700,
                            labelString: 'Scale Label'
                        },
                        stacked: true
                    }]
                },
                animation: {
                    onComplete: function() {
                        var chartInstance = this.chart,
                            ctx = chartInstance.ctx;
                        ctx.font = Chart.helpers.fontString(
                            Chart.defaults.global.defaultFontSize, Chart.defaults.global.defaultFontStyle, Chart.defaults.global.defaultFontFamily
                        );
                        ctx.textAlign = 'center';
                        ctx.textBaseline = 'bottom';
                        var bars = [0, 0, 0, 0, 0, 0, 0]
                        this.data.datasets.forEach(
                            function(dataset, i) {
                                var meta = chartInstance.controller.getDatasetMeta(i);
                                meta.data.forEach(function(bar, index) {
                                    var data = dataset.data[index];
                                    bars[index] += data;
                                    if(i === 2 && index > 2) {
                                        var fillString = '$' + Math.floor(bars[index]/1000);
                                        if( bars[index] > 1000000) {
                                            fillString += ' Billion';
                                        } else {
                                            fillString += ' Million';
                                        }
                                        ctx.fillText(fillString, bar._model.x, bar._model.y - 5);
                                    }
                                });
                            });

                    }
                },
            plugins: {
                labels: {
                    fontSize: 0
                }
            }
            },
            chart3Data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun","Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                datasets: [{
                    label: '',
                    data: [5, 6, 4.5, 5.5, 3, 6,4.5,6,8,3,5.5,4],
                    backgroundColor: '#4c84ff',
                }]
            },
            chart3Option: {
                legend: {
                    display: false
                },
                scales: {
                    xAxes: [{
                        gridLines: {
                            drawBorder: false,
                            display:false
                        },
                        ticks: {
                            display:false, // hide main x-axis line
                            beginAtZero:false
                        },
                        barPercentage: 1.8,
                        categoryPercentage: 0.2
                    }],
                    yAxes: [{
                        gridLines: {
                            drawBorder: false, // hide main y-axis line
                            display:false
                        },
                        ticks: {
                            display:false,
                            beginAtZero:true
                        },
                    }]
                },
                tooltips: {
                    enabled: false
                },
                plugins: {
                    labels: {
                        fontSize: 0
                    }
                }
            }
        };
    }

    render(){
        return(
          <div>
              <h2>Barchart Page</h2>
              <Bar
                  options={this.state.options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.data}
              />

              <h3>Barchart 2</h3>
              <Bar
                  options={this.state.chart2Options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.chart2Data}
              />

              <h3>Barchart 3</h3>
              <p>Completely clean</p>
              <Bar
                  options={this.state.chart3Option}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.chart3Data}
              />
          </div>
        );
    }
}

export default BarChartPage;