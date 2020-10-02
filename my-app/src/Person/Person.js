import React from "react";
import "./Person.css";
const person = (props) => {
  return (
    <div className="Person">
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      {/* children includes anything between the opening and closing tag <Person></Person> */}
      <h5>{props.children}</h5>
      <input type="text" onChange={props.changed} value={props.name} />
    </div>
  );
};

//! Class-based components
// class Person extends React.Component {
//   render() {
//     return (
//       <p>
//       I'm {this.props.name} and I'm {this.props.age} years old!
//      </p>
//     );
//   }
// }

export default person;
