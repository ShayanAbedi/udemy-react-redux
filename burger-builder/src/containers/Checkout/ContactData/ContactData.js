import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import axios from "../../../axios-orders";
import style from "./ContactData.module.css";
import Spinner from "../../../components/UI/Spinner /Spinner";
import classes from "../../../components/Layout/Button.module.css";
import Input from "../../../components/UI/Input/Input";
import { element } from "prop-types";

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: "input",
        config: {
          type: "text",
          placeholder: "Your Name",
        },
        value: "",
      },
      street: {
        elementType: "input",
        config: {
          type: "text",
          placeholder: "Street",
        },
        value: "",
      },
      email: {
        elementType: "input",
        config: {
          type: "email",
          placeholder: "E-mail",
        },
        value: "",
      },
      delivery: {
        elementType: "select",
        config: {
          options: [{ value: "fastest" }, { value: "free" }],
        },
      },
    },
    loading: false,
    // purchaseComplete: false,
  };

  orderHandler = (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
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

  inputChangedHandler = (e, inputId) => {
    const updatedForm = { ...this.state.orderForm };
    const updatedFormEl = { ...updatedForm[inputId] };
    updatedFormEl.value = e.target.value;
    updatedForm[inputId] = updatedFormEl;
    this.setState({ orderForm: updatedForm });
  };

  render() {
    const formElementArray = [];
    for (let key in this.state.orderForm) {
      formElementArray.push({
        id: key,
        config: this.state.orderForm[key],
      });
    }
    let form = (
      <form>
        <h4>Enter your Contact Data</h4>
        {formElementArray.map((element) => (
          <Input
            key={element.id}
            elementType={element.config.elementType}
            config={element.config.config}
            value={element.config.value}
            changed={(e) => this.inputChangedHandler(e, element.id)}
          />
        ))}
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

const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
    price: state.totalPrice,
  };
};

export default connect(mapStateToProps)(withRouter(ContactData));
