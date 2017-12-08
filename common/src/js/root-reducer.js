import { combineReducers } from 'redux';
import landingReducers from './reducers/landingReducers';
import searchBarReducer from './reducers/searchBarReducers';
import searchResultsReducers from './reducers/searchResultsReducers';
import restaurantDetailsReducers from './reducers/restaurantDetailsReducers';
import SignUpReducer from './reducers/signupReducers';
import LoginReducer from './reducers/loginReducers';
import AddRestaurantReducer from './reducers/addRestaurantReducer';

const rootReducer = combineReducers({
  restaurantDetails: restaurantDetailsReducers,
  initialSearch : searchBarReducer,
  signup: SignUpReducer,
  login: LoginReducer,
  addRestaurant: AddRestaurantReducer
})

export default rootReducer;
