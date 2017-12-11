import { connect } from 'react-redux';
import OwnerViewUpdate from '../components/ownerViewUpdate';

function mapStoreToProps(store) {
  return {
    activeOwner: store.login.activeOwner,
    restaurants: store.initialSearch.restaurants,
    login: store.login,
    ownerRestaurants: store.updateRestaurant.ownerRestaurants,
    activeRestaurant: store.ownerViewUpdate.activeRestaurant,
    shoppingCart: store.restaurantDetails.shoppingCart,
  };
}

export default connect(mapStoreToProps)(OwnerViewUpdate);