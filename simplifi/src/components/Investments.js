import React from 'react'
import Header2 from './Header2';
import classes from './Investments.module.scss';

function Investments() {
    return (
        <investments>
            <Header2>
            </Header2>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.Investments__intro}>
            <h1>Investments</h1>
            <p>Investments will go here</p>
            <a href="/mainmenu">  
            <button>Back</button>  
            </a>
            </div>
        </investments>
    )
}

export default Investments