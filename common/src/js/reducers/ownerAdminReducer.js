const defaultState = {
  ownerRestaurants: []
};

export default function ownerAdminReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'GET_OWNER_RESTAURANTS_SUCCESS': {
      return {
        ...state,
        ownerRestaurants: payload
      }
    }
    case 'GET_OWNER_RESTAURANTS_FAIL': {
      return {
        ...state,
        err: payload
      }
    }
    default: {
      return state;
    }
  }
}