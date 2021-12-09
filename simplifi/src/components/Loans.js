import React, { Component, useEffect } from 'react';
import Header2 from './Header2';
import classes from './Loans.module.scss';
import LoansChart from "./LoansChart.js";
import { Card } from 'react-bootstrap';

function Loans() {

    const generateInfo = async () => {
        const response = await fetch('/loans');
        const data = await response.json();
        console.log('data access', data["accounts"][8]["balances"]["current"])
    }

    useEffect(() => {
        generateInfo();
    }, []
    );



    return (
        <loans>
            <Header2>
            </Header2>
            <video src="/videos/video.mp4" autoPlay mute loop />
            <Card style={{ width: '20rem', paddingTop: '350px', marginLeft: '150px', left: '80px', color: 'rgb(146, 132, 223)', fontSize: '29px' }}>
                <Card.Body>
                    <Card.Title style={{ textDecorationLine: 'underline' }}>Student Loan</Card.Title>
                    <Card.Text style={{ fontSize: '18px' }}>
                        <br />
                        <h3>Payment Amount: $138.05</h3>

                        <br />
                        <br />
                        <h3>Minimum amount due: $25</h3>
                        <h3>Next payment date: 12-10-2021</h3>


                    </Card.Text>
                </Card.Body>
            </Card>
            <div className={classes.Loans__intro}>
                <h1>Loans</h1>



                <LoansChart />
                <div className={classes.Loans__stats}>
                    <h1 style={{ textDecorationLine: 'underline' }}>Summary</h1>
                    <tbody>
                        <tr>
                            <td>
                                Last payment date.....................
                            </td>
                            <td>
                                11-10-2021
                            </td>
                        </tr>
                        <tr>
                            <td>
                                End date............................................
                            </td>
                            <td>
                                10-10-2028
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Interest rate......................................
                            </td>
                            <td>
                                5.52%
                            </td>
                        </tr>
                    </tbody>
                </div>
            </div>


        </loans >
    )
}

export default Loans