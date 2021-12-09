import React, { Component } from 'react';
import { AgChartsReact } from 'ag-charts-react';
import { Chart } from 'react-chartjs-2';

class LoansChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      names: [],
      curs: [],
      options: {
        data: [
          {
            label: this.data1,
            value: 9,
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