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
        _.uniqBy([payload, ...state.shoppingCart], 'menuItem')
      };
    }
    //next case here
  default: {
    return state
    }
  }
}