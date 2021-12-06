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
                    <BalanceChart />

                    <button>Back</button>
                </a>
            </div>
        </balances>
    )
}

export default Balances