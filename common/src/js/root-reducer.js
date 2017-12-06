import { combineReducers } from 'redux';
import landingReducers from './reducers/landingReducers';
import searchBarReducer from './reducers/searchBarReducers';
import searchResultsReducer from './reducers/searchResultsReducers';

const rootReducer = combineReducers({
  initialSearch : searchBarReducer

})

export default rootReducer;