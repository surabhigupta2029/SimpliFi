import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import Example from './ChartExample';
Chart.register(ArcElement);

export default function BalanceChart() {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        getBalance();
    }, []);

    const getBalance = async () => {
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
    };

    // TO ADD: credit card image and also the credit card specific numbers

    return (
        <div>
            {/* <Doughnut /> */}
            <Example />

        </div>
    );
}

// {Object.keys(chartData).length && (
//   <div className="chart-container">
//     <div className="chart">
//       {/* <Doughnut data={chartData} options={{
//         legend: { display: true, position: "right" },

//         datalabels: {
//           display: true,
//           color: "white",
//         },
//         tooltips: {
//           backgroundColor: "#5a6e7f",
//         },

//       }} /> */}

//     </div>
//   </div>
// )}