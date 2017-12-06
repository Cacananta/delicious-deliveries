import { connect } from 'react-redux';
import RestaurantDetails from '../components/restaurantDetails';

function mapStoreToProps(store) {
  return {
    shoppingCart: store.restaurantDetails.shoppingCart
  };
}

export default connect(mapStoreToProps)(RestaurantDetails);