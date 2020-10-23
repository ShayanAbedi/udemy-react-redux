## Redux Steps

1. Set up `actions`

```js
export const ADD_INGREDIENT = "ADD_INGREDIENT";
export const REMOVE_INGREDIENT = "REMOVE_INGREDIENT";
```

2. Set up `reducer`

```js
import * as actionTypes from "./actions";
const initialState = {
  ingredients: null,
  totalPrice: 4,
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientName]:
            state.ingredients[action.payload.ingredientName] + 1,
        },
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.payload.ingredientName]:
            state.ingredients[action.payload.ingredientName] - 1,
        },
      };
    default:
      return state;
  }
};

export default reducer;
```

3. Make connection between React and Redux

- wrap the whole application (in index.js) with `<Provider></Provider>`
- create store

```js
const store = createStore(reducer);
```

- pass `store` to the `Provider`

```js
<Provider store={store}></Provider>
```

4. Connecting the component to our `store`

```js
import { connect } from "react-redux";

import * as actionTypes from "../../store/actions";
```

at the end of functional component:

```js
const mapStateToProps = (state) => {
  return {
    ings: state.ingredients,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIngredientAdded: (ingName) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredientName: ingName }),
    onIngredientRemoved: (ingName) =>
      dispatch({
        type: actionTypes.REMOVE_INGREDIENT,
        ingredientName: ingName,
      }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NameOfComponent);
```
