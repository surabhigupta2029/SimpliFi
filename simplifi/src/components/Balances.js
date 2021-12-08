import React from 'react'
import Header2 from './Header2';
import classes from './Balances.module.scss';
import BalanceChart from './BalancesChart';

function Balances() {
    return (
        <balances>
            <Header2>
            </Header2>
            <div className={classes.Balances__intro}>
                <a href="/mainmenu">
                    <h1>Total Balance</h1>
                    <BalanceChart />
                    <button>Back to Home</button>
                </a>
            </div>
            <div className={classes.Balances__Card}>
                <img src= '/Card.jpg' height='250' width='350'/>
                <h1>1234 5678 2374 7498</h1>
            </div>
        </balances>
    )
}

export default Balances