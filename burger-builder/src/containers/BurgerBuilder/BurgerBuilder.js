import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary /OrderSummary";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 2,
  bacon: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      meat: 0,
    },
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.values(ingredients).reduce((total, ing) => {
      return total + ing;
    }, 0);
    this.setState({ purchasable: sum > 0 });
  };

  addIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedIngredients = { ...this.state.ingredients };
    updatedIngredients[type] = oldCount + 1;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredient = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount > 0) {
      const updatedIngredients = { ...this.state.ingredients };
      updatedIngredients[type] = oldCount - 1;
      const priceDeletion = INGREDIENT_PRICES[type];
      const oldPrice = this.state.totalPrice;
      const newPrice = oldPrice - priceDeletion;
      this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
      this.updatePurchaseState(updatedIngredients);
    }
    return;
  };

  purchaseHandler = () => {
    this.setState({ purchasing: true });
  };

  closeModalHandler = () => {
    this.setState({ purchasing: false });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Modal show={this.state.purchasing} closeModal={this.closeModalHandler}>
          <OrderSummary
            ingredients={this.state.ingredients}
            closeModal={this.closeModalHandler}
            totalPrice={this.state.totalPrice}
          />
        </Modal>
        <Burger ingredients={this.state.ingredients}></Burger>
        <BuildControls
          add={this.addIngredient}
          remove={this.removeIngredient}
          disabled={disabledInfo}
          purchasable={this.state.purchasable}
          price={this.state.totalPrice}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
