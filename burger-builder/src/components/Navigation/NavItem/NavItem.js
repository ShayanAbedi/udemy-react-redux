import React from "react";
import classes from "./NavItem.module.css";
import { NavLink } from "react-router-dom";

const NavItem = (props) => (
  <li className={classes.NavItem}>
    <NavLink exact to={props.link} activeClassName={classes.active}>
      {props.children}
    </NavLink>
  </li>
);

export default NavItem;
