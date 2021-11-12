import React, { useEffect, useState } from 'react';
import Header from './Header';
import classes from './Signup.module.scss';

function Signup() {
    const generateInfo = async () => {
        const response = await fetch('/investments');
        const data = await response.json();
        console.log('SIGN UP PAGE AAAAAAA', data)
    };


    return (
        <signup>
            <Header>
            </Header>
            <video src="/videos/video.mp4" autoPlay mute loop />
            <div className={classes.signup__intro}>
                <h1>Signup</h1>
                <p>Signup stuff will go here</p>
                <button onClick={() => generateInfo()}>click</button>
            </div>
        </signup>
    )
}

export default Signup
