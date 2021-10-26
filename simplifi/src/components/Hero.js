import React from 'react'
import Header from './Header';
import classes from './Hero.module.scss';

function Hero() {
    return (
        <hero>
            <Header>
            </Header>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.hero__intro}>
            <h1>Welcome to Simplifi!</h1>
            <p>Content for the website descritpion will go here!</p>
        </div>
        
        <div className={classes.hero__content}>
           <div className={classes.hero__content__circle}></div>
           <div className={classes.hero__content__circle}></div>
           <div className={classes.hero__content__circle}></div>
        </div>
        </hero>
    )
}

export default Hero
