import React from "react";
import Burger from "../../Burger/Burger";
import classes from "./CheckoutSummary.module.css";
import { withRouter } from "react-router-dom";
const CheckoutSummary = (props) => {
  return (
    <div className={classes.CheckoutSummary}>
      <h1>We hope you enjoy your burger</h1>
      <div style={{ width: "100%", margin: "auto" }}>
        <Burger ingredients={props.ingredients} />
      </div>
      <button onClick={props.checkoutCanceled}>CANCEL</button>
      <button onClick={props.checkoutContinued}>CONTINUE</button>
    </div>
  );
};
export default withRouter(CheckoutSummary);
