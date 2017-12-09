import { connect } from 'react-redux';
import OwnerViewUpdate from '../components/ownerViewUpdate';

function mapStoreToProps(store) {
  return {
    activeOwner: store.login.activeOwner,
    restaurants: store.initialSearch.restaurants,
    login: store.login,
    ownerRestaurants: store.updateRestaurant.ownerRestaurants
  };
}

export default connect(mapStoreToProps)(OwnerViewUpdate);