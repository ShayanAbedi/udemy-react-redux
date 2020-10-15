import React, { Component } from "react";
import axios from "../../axios-orders";
import Aux from "../../hoc/Aux";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary /OrderSummary";
import Spinner from "../../components/UI/Spinner /Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/ErrorHandler";

const INGREDIENT_PRICES = {
  salad: 0.5,
  cheese: 0.6,
  meat: 2,
  bacon: 1,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: null,
    totalPrice: 4,
    purchasable: false,
    purchasing: false,
    loading: false,
    purchaseComplete: false,
    error: false,
  };

  componentDidMount() {
    axios
      .get("https://burger-builder-4efe9.firebaseio.com/ingredients.json")
      .then((res) => {
        this.setState({ ingredients: res.data });
      })
      .catch((error) => {
        this.setState({ error: error });
      });
  }
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

  purchaseContinue = () => {
    // this.setState({ loading: true });
    // const order = {
    //   ingredients: this.state.ingredients,
    //   price: this.state.totalPrice,
    //   customer: {
    //     name: "Shayan",
    //     address: "Test",
    //     email: "test@test.com",
    //   },
    //   delivery: "fastest",
    // };
    // axios
    //   .post("/orders.json", order)
    //   .then((res) =>
    //     this.setState({
    //       purchaseComplete: true,
    //       loading: false,
    //       purchasing: false,
    //     })
    //   )
    //   .catch((error) =>
    //     this.setState({
    //       purchaseComplete: true,
    //       loading: false,
    //       purchasing: false,
    //     })
    //   );
    const queryParams = [];
    for (let i in this.state.ingredients) {
      queryParams.push(
        encodeURIComponent(i) +
          "=" +
          encodeURIComponent(this.state.ingredients[i])
      );
    }
    queryParams.push("price=" + this.state.totalPrice);
    const queryString = queryParams.join("&");
    this.props.history.push({
      pathname: "/checkout",
      search: "?" + queryString,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    let orderSummary = null;
    let burger = this.state.error ? (
      <p>Ingredients can't be loaded</p>
    ) : (
      <Spinner />
    );

    if (this.state.ingredients) {
      burger = (
        <Aux>
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
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          closeModal={this.closeModalHandler}
          continue={this.purchaseContinue}
          totalPrice={this.state.totalPrice}
          complete={this.state.purchaseComplete}
        />
      );
    }
    if (this.state.loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={this.state.purchasing} closeModal={this.closeModalHandler}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}
export default withErrorHandler(BurgerBuilder, axios);
