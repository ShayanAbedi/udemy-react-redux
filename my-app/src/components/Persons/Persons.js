import React from "react";
import Person from "./Person/Person";
import ErrorBoundary from "../ErrorBoundary/ErrorBoundary";

const persons = (props) =>
  props.persons.map((person, index) => {
    return (
      <ErrorBoundary key={index}>
        <Person
          name={person.name}
          age={person.age}
          click={() => props.clicked(index)}
          changed={(event) => props.changed(event, person.id)}
        >
          This is the CHILD
        </Person>
      </ErrorBoundary>
    );
  });

export default persons;
