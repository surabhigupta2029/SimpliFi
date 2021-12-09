import React, { Component, useEffect } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { Chart } from 'react-chartjs-2';

var myTheme = {
    baseTheme: 'ag-default-dark',
    palette: {
        fills: ['#5C2983', '#0076C5', '#21B372', '#FDDE02', '#F76700', '#D30018'],
        strokes: ['black'],
    },
    overrides: {
        cartesian: {
            title: { fontSize: 24 },
            series: {
                column: {
                    label: {
                        enabled: true,
                        color: 'black',
                    },
                },
            },
        },
    },
};
class LoansChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            names: [],
            curs: [],
            options: {
                theme: myTheme,
                autoSize: true,
                padding: {
                    left: 7,
                    right: 0,
                    top: 8,
                    bottom: 10,
                },
                title: { text: 'Breakdown', fontFamily: 'Montserrat', fontSize: 25 },
                data: [

                    {
                        label: 'Total Paid',
                        value: 1875,

                    },

                    {
                        label: 'Minimum Remaining',
                        value: 76,
                    },
                    {
                        label: 'Balance Remaining',
                        value: 150,
                    },
                ],
                series: [
                    {
                        type: 'pie',
                        angleKey: 'value',
                        labelKey: 'label',
                        outerRadiusOffset: -30,
                        innerRadiusOffset: -80,
                        fills: ['#310d78', '#703bd9', '#9868d4']
                    },
                ],
            },
        };
    }

    async componentDidMount() {
        const response = await fetch('/loans');
        const data = await response.json();
        const data1 = data["accounts"][8]["name"];
        console.log(data)
    }

    async getLoanName() {
        const response = await fetch('/loans');
        const data = await response.json();
        const data1 = data["accounts"][8]["name"];
        return data1;
    }

    render() {
        return <AgChartsReact options={this.state.options} />;
    }
}

export default LoansChart;