import _ from 'lodash';

const defaultState = {
  shoppingCart: []
};

export default function restaurantDetailsReducers(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'ADD_SHOPPING_CART': {
      return {
        ...state,
        shoppingCart: 
        _.uniqBy([...state.shoppingCart, payload], 'menuItem')
      };
    }

    case 'UPDATE_SHOPPING_CART': {
      return {
        ...state,
        shoppingCart: payload
      };
    }
    //next case here
  default: {
    return state
    }
  }
}