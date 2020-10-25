import * as actionTypes from "./actionTypes";

export const increment = () => {
  return {
    type: actionTypes.INCREMENT,
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT,
  };
};

export const add = ({ payload }) => {
  const val = payload.val;
  return {
    type: actionTypes.ADD,
    payload: { val },
  };
};

export const subtract = ({ payload }) => {
  const val = payload.val;
  return {
    type: actionTypes.SUBTRACT,
    payload: { val },
  };
};
