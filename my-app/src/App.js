//! Functional component

// import React, { useState } from "react";
// import "./App.css";
// import Person from "./Person/Person";
// const app = (props) => {
//   // state = {
//   //   persons: [
//   //     { name: "Shayan", age: 28 },
//   //     { name: "Robin", age: 20 },
//   //     { name: "Bobby", age: 38 },
//   //   ],
//   // };

//   // switchName = () => {
//   //   this.setState({
//   //     persons: [
//   //       { name: "Shayan", age: 26 },
//   //       { name: "Robin", age: 22 },
//   //       { name: "Bob", age: 39 },
//   //     ],
//   //   });
//   // };

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Shayan", age: 28 },
//       { name: "Robin", age: 20 },
//       { name: "Bobby", age: 38 },
//     ],
//   });

//   const switchName = (newName) => {
//     setPersonsState({
//       persons: [
//         { name: newName, age: 26 },
//         { name: "Robin", age: 22 },
//         { name: "Bob", age: 39 },
//       ],
//     });
//   };

//   const nameChanged = (event) => {
//     setPersonsState({
//       persons: [
//         { name: "Shayan", age: 28 },
//         { name: event.target.value, age: 22 },
//         { name: "Bobby", age: 38 },
//       ],
//     });
//   };

//   const style = {
//     backgroundColor: "black",
//     color: "white",
//     border: "1px solid blue",
//     padding: "18px",
//     cursor: "pointer",
//   };

//   return (
//     <div className="App">
//       <h1>Hi, Welcome To React</h1>
//       {/* to pass a parameter to switchName in a class-based components => {this.switchName.bind(this, 'New Name')} */}
//       <button style={style} onClick={() => switchName("X")}>
//         Switch Name
//       </button>
//       <Person
//         name={personsState.persons[0].name}
//         age={personsState.persons[0].age}
//       >
//         My Hobbies: Watching Movies
//       </Person>
//       <Person
//         name={personsState.persons[1].name}
//         age={personsState.persons[1].age}
//         click={switchName}
//         changed={nameChanged}
//       ></Person>
//       <Person
//         name={personsState.persons[2].name}
//         age={personsState.persons[2].age}
//       ></Person>
//     </div>
//   );
// };
// export default app;

//! Class-based component

import React, { Component } from "react";
import styled from "styled-components";
import "./App.css";
import Person from "./Person/Person";
import ErrorBoundary from "./ErrorBoundary/ErrorBoundary";

const StyledButton = styled.button`
  background-color: ${(props) => (props.alter ? "red" : "green")};
  color: white;
  font: inherit;
  border: 1px solid blue;
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => (props.alter ? "salmon" : "lightgreen")};
    color: black;
  }
`;

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28, id: "001" },
      { name: "Manu", age: 29, id: "002" },
      { name: "Stephanie", age: 26, id: "003" },
    ],
    otherState: "some other value",
    showPersons: false,
  };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = { ...this.state.persons[personIndex] };
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };
  deletePersonHandler = (personIndex) => {
    // make a copy of persons array
    // const persons = this.state.persons.slice(); // slice method without any args passed into it, create a copy version
    const persons = [...this.state.persons]; // ES6 way to create a copy of an array
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };

    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              // Key always should be on the outer element/component
              <ErrorBoundary key={person.id}>
                <Person
                  name={person.name}
                  age={person.age}
                  click={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)}
                >
                  This is the CHILD
                </Person>
              </ErrorBoundary>
            );
          })}
        </div>
      );
      // style.backgroundColor = "red";
    }

    const cssClasses = [];
    if (this.state.persons.length <= 2) {
      cssClasses.push("red");
    }
    if (this.state.persons.length <= 1) {
      cssClasses.push("bold");
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p className={cssClasses.join(" ")}>This is really working!</p>
        <StyledButton
          alter={this.state.showPersons}
          onClick={this.togglePersonsHandler}
        >
          Toggle Persons
        </StyledButton>
        {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
