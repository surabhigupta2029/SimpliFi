import React from 'react'

import classes from './Signup.module.scss';

function Signup() {
    return (
        <signup>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.signup__intro}>
            <h1>Signup</h1>
            <p>Signup stuff will go here</p>
        </div>
        </signup>
    )
}

export default Signup
