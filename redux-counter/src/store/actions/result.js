import * as actionTypes from "./actionTypes";

export const saveResult = ({ payload }) => {
  const val = payload.val;
  return {
    type: actionTypes.STORE_RESULT,
    payload: { val },
  };
};

export const storeResult = ({ payload }) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(saveResult({ payload }));
    }, 2000);
  };
};

export const deleteResult = ({ payload }) => {
  const id = payload.id;
  return {
    type: actionTypes.DELETE_RESULT,
    payload: { id },
  };
};
