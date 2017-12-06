const defaultState = {
  shoppingCart: []
};

export default function RestaurantDetailsReducers(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'ADD_SHOPPING_CART': {
      return {
        shoppingCart: payload
      };
    }
    //next case here
  default: {
    return state
    }
  }
}