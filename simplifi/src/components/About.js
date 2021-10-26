import React from 'react'
import Header from './Header';
import classes from './About.module.scss';

function About() {
    return (
        <about>
            <Header>
            </Header>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.about__intro}>
            <h1>About</h1>
            <p>About stuff will go here</p>
        </div>
        </about>
    )
}

export default About
