import React from 'react'
import Header from './Header';
import classes from './Login.module.scss';

function Login() {
    return (
        <login>
            <Header>
            </Header>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.login__intro}>
            <h1>Login</h1>
            <p>Login stuff will go here</p>
            <a href="/mainmenu">  
            <button>Log in</button>  
            </a>
        </div>
        </login>
    )
}

export default Login
