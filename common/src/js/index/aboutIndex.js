import { connect } from 'react-redux';
import About from '../components/about';

function mapStoreToProps(store) {
  return {
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer,
    shoppingCart: store.restaurantDetails.shoppingCart,
  };
}

export default connect(mapStoreToProps)(About);