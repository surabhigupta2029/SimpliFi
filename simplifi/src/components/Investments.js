import React, { useEffect, useState } from 'react'
import Header2 from './Header2';
import classes from './Investments.module.scss';
import $ from 'jquery';
import { CanvasJSChart, CanvasJS } from 'canvasjs-react-charts';


function Investments() {

    const [stockData, setStockData] = useState([]);
    const [IBMstockData, IBMsetStockData] = useState([]);
    const [GOOGstockData, GOOGsetStockData] = useState([]);
    const [links, setLinks] = useState([]);

    // const getCharts = () => {
    //     $.getJSON('https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=TSLA&apikey=OKI60N00VMW08R6N')
    //         .then(({ results }) => console.log(results));
    // }

    const generateTSLAData = async () => {
        const response = await fetch('/investmentsTSLA');
        const data = await response.json();
        //console.log('AVANTAGE', data)
        setStockData(formatData(data['Time Series (Daily)']));
    };


    const generateIBMData = async () => {
        const response = await fetch('/investmentsIBM');
        const data = await response.json();
        //console.log('AVANTAGE', data)
        IBMsetStockData(formatData(data['Time Series (Daily)']));
    };

    const generateGOOGData = async () => {
        const response = await fetch('/transactions');
        const data = await response.json();
        console.log('INVESTMENTS', data)
    };

    const generateLinks = async () => {
        const response = await fetch('/getLinks');
        const data = await response.json();
        //console.log('LINKSSS', data)
        setLinks(data);
    };

    const generateInfo = async () => {
        const response = await fetch('/transactions');
        const data = await response.json();
        console.log('data access', data)
    };


    useEffect(() => {
        generateGOOGData();
        generateTSLAData();
        generateIBMData();
    }, []
    );

    function formatData(stockData) {
        return Object.entries(stockData).map(entries => {
            const [date, priceData] = entries;

            return {
                date,
                open: Number(priceData['1. open']),
                high: Number(priceData['2. high']),
                low: Number(priceData['3. low']),
                close: Number(priceData['4. close'])
            }
        });
    }


    const chart1 =
    {
        theme: "light2", //"light2", "dark1", "dark2",
        animationEnabled: true,
        title: {
            text: "Tesla (TSLA)",
        },
        width: 550,
        axisY: {
            // Minimum value is 10% less than the lowest price in the dataset
            minimum: Math.min(...stockData.map(data => data.low)) / 1.1,
            // Minimum value is 10% more than the highest price in the dataset
            maximum: Math.max(...stockData.map(data => data.high)) * 1.1,
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisX: {
            interlacedColor: "rgb(255,270,240)",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            },
            scaleBreaks: {
                spacing: 0,
                fillOpacity: 0,
                lineThickness: 0,
                customBreaks: stockData.reduce((breaks, value, index, array) => {
                    // Just return on the first iteration
                    // Since there is no previous data point
                    if (index === 0) return breaks;

                    // Time in UNIX for current and previous data points
                    const currentDataPointUnix = Number(new Date(value.date));
                    const previousDataPointUnix = Number(new Date(array[index - 1].date));

                    // One day converted to milliseconds
                    const oneDayInMs = 86400000;

                    // Difference between the current and previous data points
                    // In milliseconds
                    const difference = previousDataPointUnix - currentDataPointUnix;

                    return difference === oneDayInMs
                        // Difference is 1 day, no scale break is needed
                        ? breaks
                        // Difference is more than 1 day, need to create
                        // A new scale break
                        : [
                            ...breaks,
                            {
                                startValue: currentDataPointUnix,
                                endValue: previousDataPointUnix - oneDayInMs
                            }
                        ]
                }, [])
            }
        },
        data: [
            {
                type: 'candlestick',
                risingColor: "green",
                color: "green",
                dataPoints: stockData.map(stockData => ({
                    x: new Date(stockData.date),
                    // The OHLC for the data point
                    // The order is IMPORTANT!
                    y: [
                        stockData.open,
                        stockData.high,
                        stockData.low,
                        stockData.close
                    ]
                }))
            }
        ]
    }
    //chart1.render();

    const chart2 =
    {
        theme: "light2", //"light2", "dark1", "dark2",
        animationEnabled: true,
        title: {
            text: "International Business Machines (IBM)",
        },
        width: 550,
        axisY: {
            // Minimum value is 10% less than the lowest price in the dataset
            minimum: Math.min(...IBMstockData.map(data => data.low)) / 1.1,
            // Minimum value is 10% more than the highest price in the dataset
            maximum: Math.max(...IBMstockData.map(data => data.high)) * 1.1,
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            }
        },
        axisX: {
            interlacedColor: "rgb(255,250,250)",
            crosshair: {
                enabled: true,
                snapToDataPoint: true
            },
            scaleBreaks: {
                spacing: 0,
                fillOpacity: 0,
                lineThickness: 0,
                customBreaks: IBMstockData.reduce((breaks, value, index, array) => {
                    // Just return on the first iteration
                    // Since there is no previous data point
                    if (index === 0) return breaks;

                    // Time in UNIX for current and previous data points
                    const currentDataPointUnix = Number(new Date(value.date));
                    const previousDataPointUnix = Number(new Date(array[index - 1].date));

                    // One day converted to milliseconds
                    const oneDayInMs = 86400000;

                    // Difference between the current and previous data points
                    // In milliseconds
                    const difference = previousDataPointUnix - currentDataPointUnix;

                    return difference === oneDayInMs
                        // Difference is 1 day, no scale break is needed
                        ? breaks
                        // Difference is more than 1 day, need to create
                        // A new scale break
                        : [
                            ...breaks,
                            {
                                startValue: currentDataPointUnix,
                                endValue: previousDataPointUnix - oneDayInMs
                            }
                        ]
                }, [])
            }
        },
        data: [
            {
                type: 'candlestick',
                risingColor: "green",
                color: "red",
                dataPoints: IBMstockData.map(stockData => ({
                    x: new Date(stockData.date),
                    // The OHLC for the data point
                    // The order is IMPORTANT!
                    y: [
                        stockData.open,
                        stockData.high,
                        stockData.low,
                        stockData.close
                    ]
                }))
            }
        ]
    }




    return (
        <div className={classes.mainDiv}>

            <Header2>
            </Header2>
            <div className={classes.mainDiv_content}>
                <video src="/videos/video.mp4" autoPlay mute loop />
                <div className={classes.Investments__intro}>

                    <br />
                    <br />
                    <br />
                    {/* <button onClick={() => generateInfo()}>click</button> */}
                    <h2>Investments</h2>
                    <div className='tablediv'>


                        <table width="900px">
                            <tbody>
                                <tr>
                                    <th>  </th>
                                    <th>  </th>
                                </tr>
                                <tr>
                                    <td>
                                        <CanvasJSChart options={chart1} />
                                    </td>
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />
                                    <br />

                                    <td>
                                        <CanvasJSChart options={chart2} />
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <br />
                    <div className={classes.Investments__titles}>
                        <h3>Relevant links</h3>
                    </div>
                    <div className={classes.Investments__linksStyle}>
                        <table width="775px">
                            <tbody>
                                <tr>
                                    <th>  </th>
                                    <th>  </th>
                                    <th>  </th>
                                </tr>

                                <tr>
                                    <a href={"https://www.marketwatch.com/story/bear-market-awaits-tech-stocks-with-tesla-at-the-center-if-this-selloff-continues-strategist-warns-11637755879"}>Bear Market Awaits Tech Stocks With Tesla</a>
                                </tr>
                                <tr>
                                    <a href={"https://www.barrons.com/articles/what-ibm-investors-should-do-with-kyndryl-stock-51637917202"}>IBM Cast Off Kyndryl. Here’s What Investors Should Do With the Stock.</a>
                                </tr>
                                <tr>
                                    <a href={"https://www.independent.co.uk/news/world/americas/elon-musk-tesla-shares-sale-b1963942.html"}>Elon Musk Sells Shares</a>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </div>

                <div className="rectangle">Hello world!</div>
            </div>
        </div>
    )
}

export default Investments