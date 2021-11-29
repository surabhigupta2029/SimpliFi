import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export default function TransactionChart() {
  const [chartData, setChartData] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch("/transactions");
    const data = await response.json();
    console.log(data.transactions);

    let transactions = data.transactions;
    let labels = [];
    let t = transactions.map((trans) => {
      const tuple = {};
      tuple.category = trans.category[0];
      tuple.amount = trans.amount;
      return tuple;
    });

    let categories = t.map((obj) => obj.category);
    labels = [...new Set(categories)].sort();

    let transactionData = [];
    let sum = 0;
    for (let i = 0; i < labels.length; i++) {
      for (let j = 0; j < t.length; j++) {
        if (labels[i] === t[j].category && t[j].amount > 0) {
          sum += t[j].amount;
        }
      }
      transactionData.push(sum);
      sum = 0;
    }

    let testLabel = ["A", "B", "C", "D", "E"];
    let testData = [20, 10, 15, 50, 70];

    setChartData({
      labels: labels,
      datasets: [
        {
          label: "Population",
          data: transactionData,
          backgroundColor: [
            "rgba(75,190,232,255)",
            "rgba(172,123,184,255)",
            "rgba(255,0,151,255)",
            "rgba(254,0,0,255)",
            "rgba(255,161,2,255)",
            "rgba(254,228,13,255)",
          ],
        },
      ],
    });
  };

  return (
    <div>
      {Object.keys(chartData).length && (
        <div className="chart-container">
          <div className="chart">
            <Doughnut data={chartData} options={{}} />
          </div>
        </div>
      )}
    </div>
  );
}
