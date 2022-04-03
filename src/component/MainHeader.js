import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainHeader.module.css";

const MainHeader = (props) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/home">
              Welcome
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/addition">
              Addition
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/subtraction">
              Subtraction
            </NavLink>
          </li>
          {console.log(props.userType)}
          {props.userType === "super_user" ? (
            <li>
              <NavLink activeClassName={classes.active} to="/multiplication">
                Multiplication
              </NavLink>
            </li>
          ) : null}
          {props.userType === "super_user" ? (
            <li>
              <NavLink activeClassName={classes.active} to="/division">
                Division
              </NavLink>
            </li>
          ) : null}
          <li>
            <NavLink activeClassName={classes.active} to="/signout">
              Sign out
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
