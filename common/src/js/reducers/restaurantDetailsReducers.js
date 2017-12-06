const defaultState = {
  shoppingCart: []
};

export default function restaurantDetailsReducers(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'ADD_SHOPPING_CART': {
      return {
        shoppingCart: [payload, ...state.shoppingCart]
      };
    }
    //next case here
  default: {
    return state
    }
  }
}