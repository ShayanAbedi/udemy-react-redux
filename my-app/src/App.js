import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";
const app = (props) => {
  // state = {
  //   persons: [
  //     { name: "Shayan", age: 28 },
  //     { name: "Robin", age: 20 },
  //     { name: "Bobby", age: 38 },
  //   ],
  // };

  // switchName = () => {
  //   this.setState({
  //     persons: [
  //       { name: "Shayan", age: 26 },
  //       { name: "Robin", age: 22 },
  //       { name: "Bob", age: 39 },
  //     ],
  //   });
  // };

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Shayan", age: 28 },
      { name: "Robin", age: 20 },
      { name: "Bobby", age: 38 },
    ],
  });

  const switchName = (newName) => {
    setPersonsState({
      persons: [
        { name: newName, age: 26 },
        { name: "Robin", age: 22 },
        { name: "Bob", age: 39 },
      ],
    });
  };

  const nameChanged = (event) => {
    setPersonsState({
      persons: [
        { name: "Shayan", age: 28 },
        { name: event.target.value, age: 22 },
        { name: "Bobby", age: 38 },
      ],
    });
  };

  const style = {
    backgroundColor: "black",
    color: "white",
    border: "1px solid blue",
    padding: "18px",
    cursor: "pointer",
  };

  return (
    <div className="App">
      <h1>Hi, Welcome To React</h1>
      {/* to pass a parameter to switchName in a class-based components => {this.switchName.bind(this, 'New Name')} */}
      <button style={style} onClick={() => switchName("X")}>
        Switch Name
      </button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My Hobbies: Watching Movies
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
        click={switchName}
        changed={nameChanged}
      ></Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      ></Person>
    </div>
  );
};

export default app;
