import React from "react";

const userInput = (props) => {
  return (
    <div>
      <input
        type="text"
        onChange={props.handler}
        value={props.initialUserName}
      ></input>
    </div>
  );
};

export default userInput;
