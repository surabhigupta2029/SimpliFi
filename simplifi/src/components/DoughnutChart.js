import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";

class DoughnutChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            curs: []
        };
    }

    async componentDidMount() {
        const response = await fetch("/balance");
        const data = await response.json();
        console.log(data);

        let labels = [];
        let t = data.accounts.map((trans) => {
            const balanceData = {};
            balanceData.name = trans.name;
            balanceData.current = trans.balances.current;
            return balanceData;
        });

        let categories = t.map((obj) => obj.category);
        labels = [...new Set(categories)].sort();
        console.log(t[0].name)
        let names = []
        let curs = []

        var keys = Object.keys(t);
        keys.forEach(function (key) {
            console.log(key, t[key]);
            names.push(t[key].name)
            curs.push(t[key].current)
        });

        this.setState({ names: names });
        this.setState({ curs: curs });
    }
    render() {

        // let data = [9, 5, 3]
        // let labels = ["Newly Added", "Edited", "Deleted"]

        // let customLabels = labels.map((label, index) => `${label}: ${data[index]}`)



        const chartdata = {
            labels: this.state.names,
            datasets: [
                {
                    label: "Markets Monitored",
                    backgroundColor: [
                        "#83ce83",
                        "#959595",
                        "#f96a5d",
                        "#00A6B4",
                        "#6800B4",
                    ],
                    data: this.state.curs,
                },
            ],
        };
        return (
            <Doughnut
                data={chartdata}
                options={{
                    legend: {
                        labels: {
                            generateLabels: function (chart) {
                                var data = chart.data;
                                if (data.labels.length && data.datasets.length) {
                                    return data.labels.map(function (label, i) {
                                        var meta = chart.getDatasetMeta(0);
                                        var ds = data.datasets[0];
                                        var arc = meta.data[i];
                                        var custom = arc && arc.custom || {};
                                        var getValueAtIndexOrDefault = Chart.helpers.getValueAtIndexOrDefault;
                                        var arcOpts = chart.options.elements.arc;
                                        var fill = custom.backgroundColor ? custom.backgroundColor : getValueAtIndexOrDefault(ds.backgroundColor, i, arcOpts.backgroundColor);
                                        var stroke = custom.borderColor ? custom.borderColor : getValueAtIndexOrDefault(ds.borderColor, i, arcOpts.borderColor);
                                        var bw = custom.borderWidth ? custom.borderWidth : getValueAtIndexOrDefault(ds.borderWidth, i, arcOpts.borderWidth);

                                        // We get the value of the current label
                                        var value = chart.config.data.datasets[arc._datasetIndex].data[arc._index];

                                        return {
                                            // Instead of `text: label,`
                                            // We add the value to the string
                                            text: label + " : " + value,
                                            fillStyle: fill,
                                            strokeStyle: stroke,
                                            lineWidth: bw,
                                            hidden: isNaN(ds.data[i]) || meta.data[i].hidden,
                                            index: i
                                        };
                                    });
                                } else {
                                    return [];
                                }
                            }
                        },
                        display: true,
                        position: "right"

                    },

                    datalabels: {
                        display: true,
                        color: "white",
                    },
                    tooltips: {
                        backgroundColor: "#5a6e7f",
                    },
                }
                }
            />
        );
    }
}

export default DoughnutChart;