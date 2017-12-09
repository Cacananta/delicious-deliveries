const defaultState = {
  activeRestaurant: ''
};

export default function ownerViewUpdatesReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'SET_ACTIVE_RESTAURANT': {
      return {
        ...state,
        activeRestaurant: payload
      }
    }
    default: {
      return state
    }
  }
}