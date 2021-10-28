import React from 'react'
import Header2 from './Header2';
import classes from './Balances.module.scss';

function Balances() {
    return (
        <balances>
            <Header2>
            </Header2>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.Balances__intro}>
            <h1>Balances</h1>
            <p>Balances will go here</p>
            <a href="/mainmenu">  
            <button>Back</button>  
            </a>
            </div>
        </balances>
    )
}

export default Balances