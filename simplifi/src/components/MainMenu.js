import React from 'react'
import Header2 from './Header2';
import classes from './MainMenu.module.scss';

function MainMenu() {
    return (
        <about>
            <Header2>
            </Header2>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.MainMenu__intro}>
            <h1>Main Menu</h1>
            <p>Transactions, Balances, Loans, and Investments will go here</p>
        </div>
        </about>
    )
}

export default MainMenu
