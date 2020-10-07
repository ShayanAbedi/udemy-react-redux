import React from "react";
import Aux from "../../../hoc/Aux";
import classes from "../../Layout/Button.module.css";

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((ingKeys) => {
    return (
      <li key={ingKeys}>
        <span style={{ textTransform: "capitalize" }}>{ingKeys}</span>:{" "}
        {props.ingredients[ingKeys]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <button
        onClick={props.closeModal}
        className={`${classes.Button} ${classes.Danger} `}
      >
        CANCEL
      </button>
      <button className={`${classes.Button} ${classes.Success} `}>
        CHECKOUT
      </button>
      <p>
        Total Price: <strong>${props.totalPrice.toFixed(2)}</strong>
      </p>
    </Aux>
  );
};
export default OrderSummary;
