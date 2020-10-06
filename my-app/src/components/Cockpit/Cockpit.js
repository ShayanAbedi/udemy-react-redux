import React, { useEffect, useContext } from "react";
import styled from "styled-components";
import "./Cockpit.css";
import AuthContext from "../../context/auth-context";

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

const cockpit = (props) => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log("CockPit.js useEffect");
  }, []);

  const cssClasses = [];

  if (props.personsLength <= 2) {
    cssClasses.push("red");
  }
  if (props.personsLength <= 1) {
    cssClasses.push("bold");
  }

  return (
    <div>
      <h1>Hi, I'm a React App</h1>
      <p className={cssClasses.join(" ")}>This is really working!</p>
      <StyledButton alter={props.showPersons} onClick={props.clicked}>
        Toggle Persons
      </StyledButton>{" "}
    </div>
  );
};

export default React.memo(cockpit);
