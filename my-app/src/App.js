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

  const switchName = () => {
    setPersonsState({
      persons: [
        { name: "Shayan", age: 26 },
        { name: "Robin", age: 22 },
        { name: "Bob", age: 39 },
      ],
    });
  };

  return (
    <div className="App">
      <h1>Hi, Welcome To React</h1>
      <button onClick={switchName}>Switch Name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      >
        My Hobbies: Watching Movies
      </Person>
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      ></Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      ></Person>
    </div>
  );
};

export default app;
