import React from "react";
import classes from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";

const Toolbar = () => {
  return (
    <header className={classes.Toolbar}>
      <div>mENUE</div>
      <div className={`${classes.Logo} ${classes.DesktopOnly} `}>
        <Logo />
      </div>

      <nav className={classes.DesktopOnly}>
        <NavItems />
      </nav>
    </header>
  );
};
export default Toolbar;
