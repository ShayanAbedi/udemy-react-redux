import React, { Component } from "react";
import "./App.css";
import UserInput from "./components/UserInput/UserInput";
import UserOutput from "./components/UserOutput/UserOutput";

class App extends Component {
  state = {
    userName: "Shayan",
  };
  handleUserInput = (e) => {
    this.setState({
      userName: e.target.value,
    });
  };
  style = {
    backgroundColor: "black",
    color: "white",
  };
  render() {
    return (
      <div className="App" style={this.style}>
        <h1>Udemy course - Assignment 1</h1>
        <UserInput
          handler={this.handleUserInput}
          initialUserName={this.state.userName}
        />
        {/* <button onClick={() => this.handleUserInput("Passiv")}>
          Change Name
        </button> */}
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
        <UserOutput userName={this.state.userName} />
      </div>
    );
  }
}

export default App;
