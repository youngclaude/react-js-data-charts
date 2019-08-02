import React, {Component} from 'react';
import { Pie } from 'react-chartjs-2';

export class PieChartPage extends Component {
    constructor(props){
        super(props);


        function getRandomInt (min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        this.state = {
            data: {
                labels: ["1", "2", "3", "4", "5", "6", "7"],
                datasets: [
                    {
                        label: "Videos Made",
                        backgroundColor: "rgb(191, 63, 63)",
                        data: [10, 5, 1, 10, 32, 2, 12]
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
                    enabled: true
                },
                labels: {
                    display: true
                },
                plugins: {
                    labels: {
                        render: 'value',
                        fontSize: 25,
                        fontColor: '#fff'
                    }
                }
            },
            chart2Data: {
                labels: ["In Progress",
                    "Application Lodged",
                    "New",
                    "Letter of Offer Declined",
                    "Letter of Offer Confirmed"],
                datasets: [
                    {
                        label: "Videos Made",
                        data: [12, 12, 8, 20, 38],
                        backgroundColor: [
                            "#22495d",
                            "#547b8f",
                            "#7fb2cc",
                            "#a8559d",
                            "#76316d"
                        ]
                    }
                ]
            },
            chart2Options: {
                tooltips: {
                    mode: "label",
                    callbacks: {
                        label: function(tooltipItem, data) {
                            return data.datasets[0].data[tooltipItem.index] + "%";
                        }
                    }
                },
                maintainAspectRatio: true,
                responsive: true,
                title: {
                    display: true,
                    fontsize: 14,
                    text: "Applications 2100"
                },
                legend: {
                    display: true,
                    position: "bottom"
                },
                plugins: {
                    labels: {
                        render: 'label',
                        fontSize: 20,
                        fontColor: '#000',
                        position: 'outside'
                    }
                }
            },
            chart3Data: {
                labels: ["February", "March", "April"],
                datasets: [
                    {
                        label: "Videos Made",
                        data: [getRandomInt(1, 20), getRandomInt(1, 10), getRandomInt(1, 20)],
                        backgroundColor: ['#ffce56', '#ff6384', '#36a2eb' ]
                    }
                ]
            },
            chart3Options: {
                responsive: true,
                tooltips: {
                    enabled: false
                },
                labels: {
                    display: true
                },
                plugins: {
                    labels: [{
                        render: 'percentage',
                        fontSize: 25,
                        fontColor: '#fff'
                    },{
                        render: 'label',
                        fontSize: 25,
                        fontColor: '#000',
                        position: 'outside',
                        segment: true,
                        arc: true
                    }
                    ]
                }
            }
        };
    }

    render(){
        return(
          <div>
              <h3>Chart 1</h3>
              <Pie
                  options={this.state.options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.data}
              />

              <h3>Chart 2</h3>
              <Pie
                  options={this.state.chart2Options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.chart2Data}
              />

              <h3>Chart 3</h3>
              <Pie
                  options={this.state.chart3Options}
                  //data={this.state.data} this was passing in a data prop
                  data={this.state.chart3Data}
              />
          </div>
        );
    }
}

export default PieChartPage;