import React, { Component } from 'react';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';
import { Chart } from 'react-chartjs-2';

class ChartExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      names: [],
      curs: [],
      options: {
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
            value: 588,
          },
        ],
        series: [
          {
            type: 'pie',
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
    return <AgChartsReact options={this.state.options} />;
  }
}

export default ChartExample;