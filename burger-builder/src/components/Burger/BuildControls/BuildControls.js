import React from "react";

import classes from "./BuildControls.module.css";

import BuildControl from "./BuildControl/BuildControl";

const controls = [
  {
    label: "Salad",
    type: "salad",
  },
  {
    label: "Bacon",
    type: "bacon",
  },
  {
    label: "Meat",
    type: "meat",
  },
  {
    label: "Cheese",
    type: "cheese",
  },
];

const BuildControls = (props) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>${props.price.toFixed(2)}</strong>
      </p>
      {controls.map((c) => {
        return (
          <BuildControl
            key={c.label}
            label={c.label}
            added={() => props.add(c.type)}
            removed={() => props.remove(c.type)}
            disabled={props.disabled[c.type]}
          />
        );
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
