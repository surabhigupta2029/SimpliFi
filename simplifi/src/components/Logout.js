import React from 'react'
import Header2 from './Header2';
import classes from './Logout.module.scss';

function Logout() {
    return (
        <login>
            <Header2>
            </Header2>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.logout__intro}>
            <h1>Logout</h1>
            <p>Logout stuff will go here</p>
            <a href="/">  
            <button>Log out</button>  
            </a>
        </div>
        </login>
    )
}

export default Logout
