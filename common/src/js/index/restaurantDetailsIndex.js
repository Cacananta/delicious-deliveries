import { connect } from 'react-redux';
import RestaurantDetails from '../components/restaurantDetails';

function mapStoreToProps(store) {
  return {
    shoppingCart: store.restaurantDetails.shoppingCart,
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer
  };
}

export default connect(mapStoreToProps)(RestaurantDetails);