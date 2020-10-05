import React, { Component } from "react";

//! Error Boundary is higher order component - it wraps around other components in order to handle any errors that component throws => https://reactjs.org/docs/error-boundaries.html
class ErrorBoundary extends Component {
  state = {
    hasError: false,
    errorMessage: "",
  };

  componentDidCatch = (error, info) => {
    this.setState({ hasError: true, errorMessage: error });
  };

  render() {
    if (this.state.hasError) {
      return <h1>{this.state.errorMessage}</h1>;
    } else {
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
