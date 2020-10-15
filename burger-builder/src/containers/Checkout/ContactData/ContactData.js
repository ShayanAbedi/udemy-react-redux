import React, { Component } from "react";
import style from "./ContactData.module.css";
import classes from "../../../components/Layout/Button.module.css";

class ContactData extends Component {
  state = {
    name: "",
    email: "",
    address: {
      street: "",
      postalCode: "",
    },
  };
  render() {
    return (
      <div className={style.ContactData}>
        <h4>Enter your Contact Data</h4>
        <form>
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
          <button className={`${classes.Button} ${classes.Success} `}>
            ORDER
          </button>
        </form>
      </div>
    );
  }
}

export default ContactData;
