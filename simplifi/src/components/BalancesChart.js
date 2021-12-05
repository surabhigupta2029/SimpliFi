import React, { useEffect, useState } from "react";
import { Bar, Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

export default function BalanceChart() {
    const [chartData, setChartData] = useState({});

    useEffect(() => {
        getBalance();
      }, []);
    
    const getBalance = async () => {
      const response = await fetch("/balance");
      const data = await response.json();
      console.log(data.balance);
    
      let mapB = data.balance.map((trans) => {
        const balanceData = {};
        balanceData.name = trans.name[0];
        balanceData.current = trans.current;
        return balanceData;
      });

      const testLabel = ['Checkings', 'Savings', 'Student'];
      const testData = [10000, 20000, 30000];

      setChartData({
          labels: balanceType,
          datasets: [
            {
              label: "Population",
              data: testData,
              backgroundColor: [
                "rgba(75,190,232,255)",
                "rgba(172,123,184,255)",
                "rgba(255,0,151,255)",
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


    
    