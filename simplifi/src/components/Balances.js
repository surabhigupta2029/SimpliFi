import React from 'react'
import Header2 from './Header2';
import classes from './Balances.module.scss';
import BalanceChart from './BalancesChart';

function Balances() {
    return (
        <balances>
            <Header2>
            </Header2>
            <video src="/videos/video.mp4" autoPlay mute loop />
            <div className={classes.Balances__intro}>
                <BalanceChart />
            </div>

            <div className={classes.Balances__Card}>
                <img src='/card2.png' height='10' width='10' />

                <div className={classes.Balances__Text}>
                    <h1>Credit Card</h1>
                    <tbody>
                        <tr>
                            <td>
                                Limit.....................
                            </td>
                            <td>
                                $2000
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Current...............
                            </td>
                            <td>
                                $410
                            </td>
                        </tr>
                        <tr>
                            <td>
                                Currency............
                            </td>
                            <td>
                                USD
                            </td>
                        </tr>
                    </tbody>
                </div>
            </div>
        </balances>
    )
}

export default Balances