import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import axios from "../../../axios-orders";
import style from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner /Spinner";
import classes from "../../../components/Layout/Button.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
    loading: false,
    // purchaseComplete: false,
  };

  orderHandler = (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice,
      customer: {
        name: "Shayan",
        address: "Test",
        email: "test@test.com",
      },
      delivery: "fastest",
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({
          loading: false,
        });
        this.props.history.push("/");
      })
      .catch((error) =>
        this.setState({
          loading: false,
        })
      );
  };
  render() {
    let form = (
      <form>
        <h4>Enter your Contact Data</h4>
        <input
          className={style.Input}
          type="text"
          name="name"
          placeholder="Your Name"
        />
        <input
          className={style.Input}
          type="text"
          name="email"
          placeholder="Your Email"
        />
        <input
          className={style.Input}
          type="text"
          name="street"
          placeholder="Street"
        />
        <input
          className={style.Input}
          type="text"
          name="postal"
          placeholder="Postal Code"
        />
        <button
          className={`${classes.Button} ${classes.Success}`}
          onClick={this.orderHandler}
        >
          ORDER
        </button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return <div className={style.ContactData}>{form}</div>;
  }
}

export default withRouter(ContactData);
