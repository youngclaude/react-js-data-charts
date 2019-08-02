import React, {Component} from 'react';
import { Line, Bar } from 'react-chartjs-2';
import Chart from 'chart.js';

export class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            chart1Data: {
                    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                    datasets: [{
                            label: '',
                            data: [5, 6, 4.5, 5.5, 3, 6, 4.5, 6, 8, 3, 5.5, 4],
                            backgroundColor: '#4c84ff',
                        }]
                },
            chart1Option: {
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
                    enabled: true
                },
                plugins: {
                    labels: {
                        fontSize: 0
                    }
                }
            },
            chart2Data: {
                labels:["Fri","Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
                datasets: [{
                    label: "My First dataset",
                    pointRadius: 4,
                    pointBackgroundColor: 'rgba(255,255,255,1)',
                    pointBorderWidth: 2,
                    fill: false,
                    backgroundColor: 'transparent',
                    borderColor: '#fdc506',
                    data: [0,4, 3, 5.5, 3, 4.7, 0]
                }, {
                    label: "My Second dataset",
                    fill: false,
                    pointRadius: 4,
                    pointBackgroundColor: 'rgba(255,255,255,1)',
                    pointBorderWidth: 2,
                    backgroundColor: 'transparent',
                    borderColor: '#4c84ff',
                    data: [0,2,4.3,3.8,5.2,1.8,2.2],
                }]
            },
            chart2Options: {
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
                            beginAtZero:true
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
                }
            },
            chart3Data: {
                labels:["Fri","Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
                datasets: [{
                    label: "My First dataset",
                    pointRadius: 0,
                    fill: true,
                    backgroundColor: 'rgba(76, 132, 255, 0.9)',
                    borderColor: 'rgba(76, 132, 255, 0.9)',
                    data: [0,4, 2, 6.5, 3, 4.7, 0]
                }, {
                    label: "My Second dataset",
                    pointRadius: 0,
                    fill: true,
                    backgroundColor: 'rgba(253, 197, 6, 0.9)',
                    borderColor: 'rgba(253, 197, 6, 1)',
                    data: [0,2,4.3,3.8,5.2,1.8,2.2],
                }]
            },
            chart4Data: {

            }
        }

        // Adding a gradient to my chart data
        this.data = (canvas) => {
            const ctx = canvas.getContext("2d")
            const gradient = ctx.createLinearGradient(0,10,1000,20);
            gradient.addColorStop(0, "rgba(41,204,151,0.10196)");
            gradient.addColorStop(1, "rgba(41,204,151,0.30196)");
            return {
                labels:["Fri","Sat", "Sun", "Mon", "Tue", "Wed", "Thu"],
                datasets: [{
                    label: "My First dataset",
                    lineTension: 0,
                    pointRadius: 4,
                    pointBackgroundColor: 'rgba(255,255,255,1)',
                    pointBorderWidth: 2,
                    fill: true,
                    backgroundColor: gradient,
                    borderColor: '#29cc97',
                    borderWidth: 2,
                    data: [0, 4, 3, 5.5, 3, 4.7, 1]
                }]
            }
        }

        this.data2 = (canvas) => {
            const ctx = canvas.getContext("2d")
            const gradient = ctx.createLinearGradient(0,600,0,0);
            gradient.addColorStop(0, "rgba(0,0,255,0.3)");
            gradient.addColorStop(1, "rgba(0,0,255,0.8)");
            return {
                labels:["January","February", "March", "April", "May", "June", "July", "August"],
                datasets: [{
                    label: "My First dataset",
                    lineTension: 0.5,
                    pointRadius: 4,
                    pointBackgroundColor: 'rgb(66,136,253)',
                    pointBorderWidth: 2,
                    fill: true,
                    backgroundColor: gradient,
                    borderWidth: 5,
                    data: [0, 4, 3, 5.5, 3, 4.7, 1, 7]
                }]
            }
        }

    };
    render() {
        return (
            <div>
                <p>Hello from dashboard</p>
                <div className="row">
                    <div className="col s3"><div className="card-panel white">
                        <h5>71, 503</h5>
                        <p>Online Signups</p>
                        <Bar
                            data={this.state.chart1Data}
                            options={this.state.chart1Option}
                            // this was passing in a data prop
                        />
                    </div></div>
                    <div className="col s3"><div className="card-panel white lighten-2">
                        <h5>71, 503</h5>
                        <p>Online Signups</p>
                        <Line
                            data={this.state.chart2Data}
                            options={this.state.chart2Options}
                            // this was passing in a data prop
                        />
                    </div></div>
                    <div className="col s3"><div className="card-panel green">
                        <h5>71, 503</h5>
                        <p>Online Signups</p>
                        <Line
                            data={this.state.chart3Data}
                            options={this.state.chart2Options}
                            // this was passing in a data prop
                        />
                    </div></div>
                    <div className="col s3"><div className="card-panel white">
                        <h5>71, 503</h5>
                        <p>Online Signups</p>
                        <Line
                            data={this.data}
                            options={this.state.chart2Options}
                            // this was passing in a data prop
                        />
                    </div></div>
                </div>
                <div className="row">
                    <div className="col s4"><div className="card-panel white">
                        <div className="icon-box">
                        <span>
                        <i className="material-icons">insert_chart</i>
                        Subscribers</span>
                        <span>2,543</span>
                        </div>
                    </div></div>
                    <div className="col s4"><div className="card-panel white">
                        <div className="icon-box">
                        <span>
                        <i className="material-icons">thumb_up</i>
                        Likes</span>
                            <span>2,543</span>
                        </div>
                    </div></div>
                    <div className="col s4"><div className="card-panel white">
                        <div className="icon-box">
                        <span>
                        <i className="material-icons">speaker_notes</i>
                        Comments</span>
                            <span>2,543</span>

                        </div>
                    </div></div>
                </div>

                <div className="row">
                    <div className="col s12"><div className="card-panel white">
                        <Line
                            data={this.data2}
                        />
                    </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col s3"><div className="card-panel white">

                        <h5>Quick Tip</h5>
                        <p>Lourem ipsum test text for you see and never read</p>
                    </div></div>
                    <div className="col s3"><div className="card-panel white">

                        <h5>Monthly Revenue</h5>
                        <p>Lourem ipsum test text for you see and never read</p>
                    </div></div>
                    <div className="col s6"><div className="card-panel white">

                        <h5>Recent Uploads</h5>
                        <p>Lourem ipsum test text for you see and never read</p>
                    </div></div>
                </div>

            </div>
        );
    }
}

export default Dashboard;