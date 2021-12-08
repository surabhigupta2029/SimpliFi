import React, { Component } from 'react';
import { cloneDeep } from 'lodash';
import { render } from 'react-dom';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';


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
            value: 110.00,
          },
          {
            label: 'Saving',
            value: 210.00,
          },
          {
            label: 'Mortgage',
            value: 56302.06,
          },
          {
            label: 'Credit Card',
            value: 410.00,
          },
          {
            label: 'CD',
            value: 1000.00,
          },
          {
            label: '401k',
            value: 23631.98,
          },
          {
            label: 'Money Market',
            value: 43200.00,
          },
          {
            label: 'Student Loan',
            value: 65262.00,
          },
        ],
        series: [
          {
            type: 'pie',
            innerRadiusOffset: -50,
            angleKey: 'value',
            labelKey: 'label',
          },
        ],
      },
    };
  }
  async componentDidMount() {
     const response = await fetch("/balance");
     const data = await response.json();
     console.log(data.balance);
  }

  render() {
    return <AgChartsReact options={this.state.options} />;
  }
}

export default ChartExample;