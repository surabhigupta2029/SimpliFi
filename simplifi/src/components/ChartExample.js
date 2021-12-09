import React, { Component } from 'react';
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

class ChartExample extends Component {


    constructor(props) {
        super(props);

        this.state = {
            names: [],
            curs: [],
            options: {
                theme: myTheme,
                autoSize: true,
                padding: {
                    left: 90,
                    right: 20,
                    top: 90,
                    bottom: 65,
                },
                title: { text: 'Breakdown', fontFamily: 'Montserrat', fontSize: 25 },
                data: [
                    {
                        label: 'Checking',
                        value: 110,
                    },
                    {
                        label: 'Saving',
                        value: 210,
                    },
                    {
                        label: 'Student Loan',
                        value: 900,
                    },
                    {
                        label: 'IRA',
                        value: 320.76,
                    },
                    {
                        label: 'Credit Card',
                        value: 410,
                    },
                ],
                series: [
                    {
                        type: 'pie',
                        outerRadiusOffset: 20,
                        innerRadiusOffset: -20,
                        angleKey: 'value',
                        labelKey: 'label',
                    },
                ],
            },
        };
    }

    async componentDidMount() {
        // const response = await fetch("/balance");
        // const data = await response.json();
        // console.log(data);

        // let labels = [];
        // let t = data.accounts.map((trans) => {
        //   const balanceData = {};
        //   balanceData.name = trans.name;
        //   balanceData.current = trans.balances.current;
        //   return balanceData;
        // });

        // let categories = t.map((obj) => obj.category);
        // labels = [...new Set(categories)].sort();
        // console.log(t[0].name)
        // let names = []
        // let curs = []

        // var keys = Object.keys(t);
        // keys.forEach(function (key) {
        //   console.log(key, t[key]);
        //   names.push(t[key].name)
        //   curs.push(t[key].current)
        // });


        // this.setState({ names: names });
        // this.setState({ curs: curs });
    }

    render() {
        return <AgChartsReact style={{ width: 500, height: 200 }} options={this.state.options} />;
    }
}

export default ChartExample;