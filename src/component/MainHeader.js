import React from "react";
import { NavLink } from "react-router-dom";
import classes from './MainHeader.module.css';

const MainHeader = ()=>{
    return(
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink activeClassName={classes.active} to='/home'>Welcome</NavLink>
                    </li>
                    <li>
                        <NavLink activeClassName={classes.active} to='/calculator'>Calculator</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainHeader;