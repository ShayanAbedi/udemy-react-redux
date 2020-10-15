import React, { Component } from "react";
import Order from "../../components/Order/Order";
import axios from "../../axios-orders";
import withErrorHandler from "../../hoc/withErrorHandler/ErrorHandler";
class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    axios
      .get("/orders.json")
      .then((res) => {
        const orders = [];
        for (let key in res.data) {
          orders.push({ ...res.data[key], id: key });
        }
        this.setState({
          loading: false,
          orders: orders,
        });
      })
      .catch((err) => {});
  }
  render() {
    let ordersElement = this.state.orders.map((order) => {
      return (
        <Order
          ingredients={order.ingredients}
          price={order.price}
          key={order.id}
        />
      );
    });
    return <div>{ordersElement}</div>;
  }
}

export default withErrorHandler(Orders, axios);
