import React from 'react'
import Header from './Header';
import classes from './Hero.module.scss';

function Hero() {
    return (
        <hero>
            <Header>
            </Header>
            <video src="/videos/video.mp4" autoPlay mute loop />
            <img id='show_bg_2' src="/img/intro.jpg" />
            <div className={classes.hero__intro}>
                <h1>Welcome to Simplifi!</h1>
                <p>A personalized financial tracker and visualizer</p>
            </div>
        </hero>
    )
}

export default Hero
