const defaultState = {
  location: ''
};

export default function searchBarReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case 'UPDATE_SEARCH_LOCATION_SUCCESS':
      return {
        ...state,
        restaurants: payload[0],
        location: payload[1]
      }
    case 'UPDATE_SEARCH_LOCATION_FAIL':
      return {
        ...state,
        err: payload
      }
    default: {
      return state;
    }
  }
}
