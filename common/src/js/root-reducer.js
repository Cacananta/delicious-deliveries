import { combineReducers } from 'redux';
import landingReducers from './reducers/landingReducers';
import searchResultsReducers from './reducers/searchResultsReducers';

const rootReducer = combineReducers({
  initialSearch: 'placeholder',

})

export default rootReducer;