import { connect } from 'react-redux';
import ShoppingCart from '../components/shoppingCart';

function mapStoreToProps(store) {
  return {
    shoppingCart: store.restaurantDetails.shoppingCart
  };
}

export default connect(mapStoreToProps)(ShoppingCart);