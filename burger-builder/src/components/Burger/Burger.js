import React from "react";

import { withRouter } from "react-router-dom";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import classes from "./Burger.module.css";

const Burger = (props) => {
  const ingredients = props.ingredients;

  let transformedIngredients = Object.keys(ingredients)
    .map((ing) => {
      return [...Array(ingredients[ing])].map((_, index) => {
        return <BurgerIngredient type={ing} key={ing + index} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please Start Adding Ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default withRouter(Burger);
