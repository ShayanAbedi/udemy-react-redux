import React from "react";

const validation = (props) => {
  let validationMsg = "Text too short";

  if (props.inputLength >= 5) {
    validationMsg = "Text long enough";
  }

  return <p>{validationMsg}</p>;
};

export default validation;
