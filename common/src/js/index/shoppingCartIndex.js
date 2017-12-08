import { connect } from 'react-redux';
import ShoppingCart from '../components/shoppingCart';

function mapStoreToProps(store) {
  return {
    shoppingCart: store.restaurantDetails.shoppingCart,
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer
  };
}

export default connect(mapStoreToProps)(ShoppingCart);