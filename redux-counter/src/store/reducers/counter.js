import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case actionTypes.ADD:
      return {
        ...state,
        counter: state.counter + action.payload.val,
      };

    case actionTypes.SUBTRACT:
      //! this one using the Utility function (we can apply it to other cases too)
      return updateObject(state, {
        counter: state.counter - action.payload.val,
      });
    default:
      break;
  }
  return state;
};

export default reducer;
