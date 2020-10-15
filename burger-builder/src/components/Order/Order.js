import React from "react";
import classes from "./Order.module.css";

const Order = ({ ingredients, price }) => {
  return (
    <div className={classes.Order}>
      <div style={{ marginTop: "10px" }}>
        {Object.keys(ingredients).map((ing) => {
          return (
            <span
              style={{ border: "1px solid", padding: "5px", margin: "10px" }}
            >
              {ing}: {ingredients[ing]}
            </span>
          );
        })}
      </div>

      <p>
        Price: <strong>{price}</strong>
      </p>
    </div>
  );
};

export default Order;
