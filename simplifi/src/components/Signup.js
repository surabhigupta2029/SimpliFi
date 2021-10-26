import React from 'react'
import Header from './Header';
import classes from './Signup.module.scss';

function Signup() {
    return (
        <signup>
            <Header>
            </Header>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.signup__intro}>
            <h1>Signup</h1>
            <p>Signup stuff will go here</p>
        </div>
        </signup>
    )
}

export default Signup
