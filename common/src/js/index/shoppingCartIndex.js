import { connect } from 'react-redux';
import ShoppingCart from '../components/shoppingCart';

function mapStoreToProps(store) {
  return {
    //add store here:
    //key: value
  };
}

export default connect(mapStoreToProps)(ShoppingCart);