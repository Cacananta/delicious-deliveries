import { connect } from 'react-redux';
import RestaurantDetails from '../components/restaurantDetails';

function mapStoreToProps(store) {
  return {
    shoppingCart: store.restaurantDetails.shoppingCart,
    chosenRestaurant: store.restaurantDetails.chosenRestaurant,
    menuItems: store.restaurantDetails.menuItems,
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer
  };
}

export default connect(mapStoreToProps)(RestaurantDetails);