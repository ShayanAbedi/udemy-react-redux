import React from "react";
import styled from "styled-components";
// import "./Person.css";
const StyledDiv = styled.div`
  width: 60%;
  margin: 20px auto;
  color: blue;
  border: 1px solid rgb(116, 100, 100);
  box-shadow: 0 2px 3px #ccc;
  padding: 16px;
  text-align: center;
  @media (min-width: 500px) {
    width: 450px;
  }
`;
const person = (props) => {
  return (
    // <div className="Person">
    <StyledDiv>
      <p onClick={props.click}>
        I'm {props.name} and I'm {props.age} years old!
      </p>
      {/* children includes anything between the opening and closing tag <Person></Person> */}
      <h5>{props.children}</h5>
      <input type="text" onChange={props.changed} value={props.name} />
    </StyledDiv>
  );
};

export default person;
