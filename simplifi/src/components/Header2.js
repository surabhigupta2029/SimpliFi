import React from 'react';

import classes from './Header2.module.scss';

const Header2 = (props) => {
    return (
        <header2 className={classes.header2}>  
         <div className={classes.header2__content}>
             <h2 className={classes.header2__content__logo}>Simplifi</h2>
         <nav className={classes.header2__content__nav}>
             <ul>
                 <li>
                     <a href="/mainmenu">Dashboard</a>
                 </li>
                 <li>
                     <a href="/login">Log out</a>
                 </li>
             </ul>
         </nav>
         <div className={classes.header2__content__toggle}>
            </div>
            <div>{props.children}</div>
         </div>
        </header2>
    )
}

export default Header2

