import _ from 'lodash';

const defaultState = {
  shoppingCart: [],
  chosenRestaurant: {},
  menuItems: []
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

    case 'CHOOSE_RESTAURANT': {
      return {
        ...state,
        chosenRestaurant: payload
      }
    }

    case 'ADD_ORDER': {
      console.log('you da man', payload);
      return{
          ...state,
          shoppingCart: []
      }
    }

    case 'GET_MEUN_ITEMS': {
      console.log(23, payload);
      return {
        ...state,
        menuItems: payload
      }
    }

    case 'GET_MEUN_ITEMS_REJECTED': {
      console.log(32, payload);
      return {
        ...state,
        menuItems: []
      }
    }
    //next case here
  default: {
    return state
    }
  }
}