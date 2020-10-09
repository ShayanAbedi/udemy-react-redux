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
  return !props.complete ? (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients: </p>
      <ul>{ingredientSummary}</ul>
      <p>
        Total Price: <strong>${props.totalPrice.toFixed(2)}</strong>
      </p>

      <p>Continue to Checkout? </p>
      <button
        onClick={props.closeModal}
        className={`${classes.Button} ${classes.Danger} `}
      >
        CANCEL
      </button>
      <button
        className={`${classes.Button} ${classes.Success} `}
        onClick={props.continue}
      >
        CONTINUE
      </button>
    </Aux>
  ) : (
    <p>Order Submitted!!</p>
  );
};
export default OrderSummary;
