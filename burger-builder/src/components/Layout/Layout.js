import React from "react";
import Aux from "../../hoc/Aux";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import classes from "./Layout.module.css";

const Layout = (props) => {
  return (
    <Aux>
      <Toolbar></Toolbar>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};

export default Layout;
