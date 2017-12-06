import { combineReducers } from 'redux';
import landingReducers from './reducers/landingReducers';
import searchBarReducer from './reducers/searchBarReducers';
import searchResultsReducer from './reducers/searchResultsReducers';
import restaurantDetailsReducers from './reducers/restaurantDetailsReducers';

const rootReducer = combineReducers({
  searchBar: searchBarReducer,
  restaurantDetails: restaurantDetailsReducers,
  initialSearch : searchBarReducer

})

export default rootReducer;
