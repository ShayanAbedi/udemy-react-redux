import React from "react";
import "./UserOutput.css";

const userOutput = (props) => {
  return (
    <div className="User">
      <p>Hi</p>
      <p>My name is {props.userName}</p>
    </div>
  );
};

export default userOutput;
