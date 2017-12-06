import { types } from "../actions/searchBarActions";

const defaultState = {
  location: ''
};

export default function searchDisplayReducer(state = defaultState, action) {
  const { type, payload } = action;

  switch(type) {
    case "UPDATE_SEARCH_LOCATION": {
      return {
        ...state,
            location: payload.location
      }
    }
    default: {
      return state;
    }
  }
}
