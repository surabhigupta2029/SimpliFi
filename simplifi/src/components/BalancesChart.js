import React, { useEffect, useState } from "react";
import { Chart, ArcElement } from "chart.js";
import Example from './ChartExample';
import classes from './Balances.module.scss';
import { AgGridColumn, AgGridReact } from '@ag-grid-community/react';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import "@ag-grid-community/core/dist/styles/ag-theme-alpine.css";
Chart.register(ArcElement);

export default function BalanceChart() {
  const [chartData, setChartData] = useState({});
  const [gridApi, setGridApi] = useState(null);
  const [rowData, setRowData] = useState(null);
  const [style, setStyle] = useState({
      height: '100%',
      width: '100%'
  });

  useEffect(() => {
    getBalance();
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }

    const setWidthAndHeight = (width, height) => {
      setStyle({
         width,
          height
      });
    };
  }, [rowData]);

  const getBalance = async () => {
    // const response = await fetch("/balance");
    // const data = await response.json();
    // console.log(data.balance);
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

    // const testLabel = ['Checkings', 'Savings', 'Student', 'Student', 'Student', 'Student', 'Student', 'Student', 'Student'];
    // const testData = [10000, 20000, 30000];
    console.log("hello")
    // let customLabels = names.map((label, index) => `${label}: ${data[index]}`)
    // setChartData({
    //   labels: customLabels,
    //   datasets: [
    //     {
    //       label: "Population",
    //       data: curs,
    //       fill: false,
    //       borderColor: "#FC940B",
    //       backgroundColor: [
    //         "rgba(75,190,232,255)",
    //         "rgba(172,123,184,255)",
    //         "rgba(255,0,188,35)",
    //         "rgba(124,0,113,255)",

    //       ],
    //       hoverBackgroundColor: "blue",
    //     }
    //   ],

    // });

  }
  // TO ADD: credit card image and also the credit card specific numbers

  return (
    <div className={classes.Balances_Chart}>
      {/* <Doughnut /> */}
      <Example />

    </div>
  );
}



