import React from 'react'
import Header2 from './Header2';
import classes from './MainMenu.module.scss';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function MainMenu() {
    return (
        <mainmenu>
            <Header2>
            </Header2>
            <video src="/videos/video.mp4" autoPlay mute loop />
            <div className={classes.MainMenu__intro}>
                <h1>Dashboard</h1>
                <a href="/transactions">
                    <button className={classes.MainMenu__buttons2}>Transactions</button>
                </a>
                <a href="/balances">
                    <button className={classes.MainMenu__buttons2}>Balances</button>
                </a>
                <a href="/loans">
                    <button className={classes.MainMenu__buttons2}>Loans</button>
                </a>
                <a href="/investments">
                    <button className={classes.MainMenu__buttons2}>Investments</button>
                </a>
            </div>
        </mainmenu >
    )
}

export default MainMenu
