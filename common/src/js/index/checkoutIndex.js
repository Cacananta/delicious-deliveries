import { connect } from 'react-redux';
import Checkout from '../components/checkout';

function mapStoreToProps(store) {
  return {
    shoppingCart: store.restaurantDetails.shoppingCart,
    location: store.initialSearch.location,
    currentCustomerId: store.login.currentCustomerId,
    activeCustomer: store.login.activeCustomer
  };
}

export default connect(mapStoreToProps)(Checkout);