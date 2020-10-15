import React from "react";
import classes from "./NavItems.module.css";
import NavItem from "../NavItem/NavItem";

const NavItems = () => {
  return (
    <ul className={classes.NavItems}>
      <NavItem link="/" active>
        Burger Builder
      </NavItem>
      <NavItem link="/orders">Orders</NavItem>
    </ul>
  );
};

export default NavItems;
