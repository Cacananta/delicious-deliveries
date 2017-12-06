import { combineReducers } from 'redux';
import landingReducers from './reducers/landingReducers';
import searchDisplayReducer from './reducers/searchBarReducers';
import searchResultsReducer from './reducers/searchResultsReducers';
import restaurantDetailsReducers from './reducers/restaurantDetailsReducers';

const rootReducer = combineReducers({
  searchBar: searchDisplayReducer,
  restaurantDetails: restaurantDetailsReducers
})

export default rootReducer;