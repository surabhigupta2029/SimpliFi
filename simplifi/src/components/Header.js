import React from 'react';

import classes from './Header.module.scss';

const Header = () => {
    return (
        <header className={classes.header}>  
         <div className={classes.header__content}>
             <h2 className={classes.header__content__logo}>Simplifi</h2>
         <nav className={classes.header__content__nav}>
             <ul>
                 <li>
                     <a href="/">Home</a>
                 </li>
                 <li>
                     <a href="/">About</a>
                 </li>
                 <li>
                     <a href="/">Log in</a>
                 </li>
                 <li>
                     <a href="/">Sign up</a>
                 </li>
             </ul>
         </nav>
         <div className={classes.header__content__toggle}>
            </div>
         </div>
        </header>
    )
}

export default Header
