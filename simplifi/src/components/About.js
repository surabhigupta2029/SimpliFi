import React from 'react'
import Header from './Header';
import classes from './About.module.scss';

function About() {
    return (
        <about>
            <Header>
            </Header>
            <video src="/videos/video.mp4" autoPlay mute loop />
            <div className={classes.about__intro}>
                <h1>About</h1>
                <h1 className={classes.about__smallText}>---- Meet the Team ----</h1>
                <h4>Surabhi Gupta</h4>
                <h5>
                    I am a curious person who loves to learn new things and explore!
                    My hobbies include hiking, painting, stargazing
                </h5>
                <h4>David Sambilay</h4>
                <h5>
                    I like keeping myself busy by learning new things and playing sports.
                    I like to play basketball, video games and running!

                </h5>
                <h4>Fernando Gonzalez</h4>
                <h5>
                    I am a hard worker and always try my best when it comes to working with others.
                    In my free time, I play video games.
                </h5>

                <h4>Jeffrey Yang</h4>
                <h5>
                    I am open to learning and am excited about this product. In my free time, I like gaming, sketching and eating!
                </h5>
            </div>
        </about>
    )
}

export default About
