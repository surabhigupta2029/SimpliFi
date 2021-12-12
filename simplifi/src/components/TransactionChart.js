import React, { useEffect, useState } from "react";
import * as agCharts from "ag-charts-community";
import { AgChartsReact } from "ag-charts-react";
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
export default function TransactionChart() {
    const [data, setData] = useState([]);
    const series = [
        {
            type: "pie",
            angleKey: "value",
            labelKey: "label",
        },
    ];
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const response = await fetch("/transactions");
        const data = await response.json();
        //console.log(data);

        let transactions = data.transactions;

        let allLabel = transactions.map((trans) => {
            return trans.category[0];
        });

        let labels = [...new Set(allLabel)].sort();
        console.log(labels);

        let transactionData = [];
        let sum = 0;
        for (let i = 0; i < labels.length; i++) {
            for (let j = 0; j < transactions.length; j++) {
                if (
                    labels[i] === transactions[j].category[0] &&
                    transactions[j].amount > 0
                ) {
                    sum += transactions[j].amount;
                }
            }
            transactionData.push(sum);
            sum = 0;
        }

        console.log(transactionData);

        let chartData = labels.map((label, i) => {
            const tuple = {};
            tuple.label = label;
            tuple.value = transactionData[i];
            return tuple;
        });

        setData(chartData);
    };

    return (
        <div>
            {Object.keys(data).length && (
                <div className="chart-container" style={{ display: "inline-block" }}>
                    <div
                        className="chart"
                        style={{ width: "700px", height: "550px", display: "inline-block", marginTop: '15%', marginLeft: '25%' }}
                    >
                        <AgChartsReact
                            options={{
                                theme: myTheme,
                                data: data,
                                series: series,
                            }}
                        />
                    </div>
                </div>
            )}
        </div>
    );
}