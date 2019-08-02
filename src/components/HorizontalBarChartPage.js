import React, {Component} from 'react';
import { HorizontalBar } from 'react-chartjs-2';

export class HorizontalBarChartPage extends Component {
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
            },
            chart2Data: {
                labels: ["Agent Name A",
                    "Agent Name B",
                    "Agent Name C",
                    "Agent Name D",
                    "Agent Name E",
                    "Agent Name F",
                    "Agent Name G"],
                datasets: [
                    {
                        label: "In Progress",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: "#22495d"
                    },
                    {
                        label: "Application Lodged",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        backgroundColor: "#547b8f"
                    },
                    {
                        label: "New",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: "#7fb2cc"
                    },
                    {
                        label: "Letter of Offer Declined",
                        data: [28, 48, 40, 19, 86, 27, 90],
                        backgroundColor: "#a8559d"
                    },
                    {
                        label: "Letter of Offer Confirmed",
                        data: [65, 59, 80, 81, 56, 55, 40],
                        backgroundColor: "#76316d"
                    }
                ]
            },
            chart2Options: {
                scales: {
                    xAxes: [
                        {
                            stacked: true,
                            gridLines: {
                                display: false
                            }
                        }
                    ],
                    yAxes: [
                        {
                            barPercentage: 0.5,
                            stacked: true,
                            gridLines: {
                                display: false
                            }
                        }
                    ]
                },
                title: {
                    display: true,
                    fontsize: 14,
                    text: "Applications 2100"
                },
                legend: {
                    display: true,
                    position: "bottom"
                },
                tooltips: {
                    enabled: true,
                    mode: 'nearest'
                }
            }
        };
    }

    render(){
        return(
            <div>
                <h3>Horizontal Bar Chart </h3>
                <HorizontalBar
                    options={this.state.options}
                    //data={this.state.data} this was passing in a data prop
                    data={this.state.data}
                />
                <h3>Horizontal Bar Chart 2 </h3>
                <HorizontalBar
                    options={this.state.chart2Options}
                    //data={this.state.data} this was passing in a data prop
                    data={this.state.chart2Data}
                />
            </div>
        );
    }
}

export default HorizontalBarChartPage;