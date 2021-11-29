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
                <div className={classes.MainMenu__buttons}>
                    <Link to="/transactions">
                        <button>Transactions</button>
                    </Link>
                    <Link to="/balances">
                        <button>Balances</button>
                    </Link>
                    <Link to="/loans">
                        <button>Loans</button>
                    </Link>
                    <Link to="/investments">
                        <button>Investments</button>
                    </Link>
                </div>
            </div>
        </mainmenu>
    )
}

export default MainMenu
