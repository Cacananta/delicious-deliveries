import { combineReducers } from 'redux';
import landingReducers from './reducers/landingReducers';
import searchBarReducer from './reducers/searchBarReducers';
import searchResultsReducers from './reducers/searchResultsReducers';
import restaurantDetailsReducers from './reducers/restaurantDetailsReducers';
import SignUpReducer from './reducers/signupReducers';
import LoginReducer from './reducers/loginReducers';
import AddRestaurantReducer from './reducers/addRestaurantReducer';
import addMenuItemReducer from './reducers/addMenuItemReducer';
import ownerAdminReducer from './reducers/ownerAdminReducer';
import UpdateRestaurantReducer from './reducers/updateRestaurantDetailsReducer';
import ownerViewUpdateReducer from './reducers/ownerViewUpdateReducer';
import updateOwnerInfoReducer from './reducers/updateOwnerInfoReducer'

const rootReducer = combineReducers({
  restaurantDetails: restaurantDetailsReducers,
  initialSearch : searchBarReducer,
  signup: SignUpReducer,
  login: LoginReducer,
  addRestaurant: AddRestaurantReducer,
  AddMenuItem: addMenuItemReducer,
  // ownerRestaurants: ownerAdminReducer,
  updateRestaurant: UpdateRestaurantReducer,
  ownerViewUpdate: ownerViewUpdateReducer,
  UpdateOwnerInfo: updateOwnerInfoReducer
})

export default rootReducer;
