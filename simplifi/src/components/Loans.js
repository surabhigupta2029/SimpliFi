import React, {Component, useEffect} from 'react';
import Header2 from './Header2';
import classes from './Loans.module.scss';
import LoansChart from "./LoansChart.js";


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
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.Loans__intro}>
            <h1>Loans</h1>
            <p>Loans will go here</p>
            <LoansChart />
            <a href="/mainmenu">  
            <button>Back</button>  
            </a>
            </div>
        </loans>
    )
}

export default Loans