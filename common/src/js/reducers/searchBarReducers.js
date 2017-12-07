const defaultState = {
  location: '',
  restaurants: []
};

export default function searchBarReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case 'UPDATE_SEARCH_LOCATION_SUCCESS': {
      return {
        ...state,
        restaurants: payload
      }
    }
    case 'UPDATE_SEARCH_LOCATION_FAIL': {
      return {
        ...state,
        err: payload
      }
    }
    case 'CAPTURE_LOCATION': {
      return {
        ...state,
        location: payload
      }
    }
    default: {
      return state;
    }
  }
}
