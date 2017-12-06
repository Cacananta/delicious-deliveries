import { combineReducers } from 'redux';
import landingReducers from './reducers/landingReducers';
import searchDisplayReducer from './reducers/searchBarReducers';
import searchResultsReducer from './reducers/searchResultsReducers';

const rootReducer = combineReducers({
  searchBar: searchDisplayReducer

})

export default rootReducer;