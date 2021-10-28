import React from 'react'
import Header2 from './Header2';
import classes from './Loans.module.scss';

function Loans() {
    return (
        <loans>
            <Header2>
            </Header2>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.Loans__intro}>
            <h1>Loans</h1>
            <p>Loans will go here</p>
            <a href="/mainmenu">  
            <button>Back</button>  
            </a>
            </div>
        </loans>
    )
}

export default Loans