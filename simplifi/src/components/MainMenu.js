import React from 'react'
import Header2 from './Header2';
import classes from './MainMenu.module.scss';

function MainMenu() {
    return (
        <mainmenu>
            <Header2>
            </Header2>
            <video src="/videos/video.mp4" autoPlay mute loop/>
        <div className={classes.MainMenu__intro}>
            <h1>Dashboard</h1>
        <div className={classes.MainMenu__buttons}>
            <a href="/transactions">  
            <button>Transactions</button>  
            </a>
            <a href="/balances">  
            <button>Balances</button> 
            </a> 
            <a href="/loans">  
            <button>Loans</button>  
            </a>
            <a href="/investments">  
            <button>Investments</button>  
            </a>
            </div>
        </div>
        </mainmenu>
    )
}

export default MainMenu
