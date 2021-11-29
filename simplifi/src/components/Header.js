import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

import classes from './Header.module.scss';

const Header = (props) => {
    return (
        <header className={classes.header}>
            <div className={classes.header__content}>
                <h2 className={classes.header__content__logo}>Simplifi</h2>
                <nav className={classes.header__content__nav}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/login">Log in</Link>
                        </li>
                        <li>
                            <Link to="/signup">Sign up</Link>
                        </li>
                    </ul>
                </nav>
                <div className={classes.header__content__toggle}>
                </div>
                <div>{props.children}</div>
            </div>
        </header>
    )
}

export default Header

