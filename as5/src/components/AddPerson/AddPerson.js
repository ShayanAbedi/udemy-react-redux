import React, { useState } from "react";

import "./AddPerson.css";

const addPerson = (props) => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  return (
    <div className="AddPerson">
      <input
        type="text"
        value={name}
        onChange={nameChangeHandler}
        placeholder="Name"
      />
      <input
        type="text"
        value={age}
        onChange={ageChangeHandler}
        placeholder="Age"
      />
      <button onClick={() => props.personAdded(name, age)}>Add Person</button>
    </div>
  );
};

export default addPerson;
