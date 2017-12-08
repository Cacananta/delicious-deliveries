import { connect } from 'react-redux';
import Checkout from '../components/checkout';

function mapStoreToProps(store) {
  return {
    shoppingCart: store.restaurantDetails.shoppingCart,
    activeCustomer: store.login.activeCustomer
  };
}

export default connect(mapStoreToProps)(Checkout);