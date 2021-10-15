import React from 'react'

import classes from './Login.module.scss';

function Login() {
    return (
        <login>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.login__intro}>
            <h1>Login</h1>
            <p>Login stuff will go here</p>
        </div>
        </login>
    )
}

export default Login
