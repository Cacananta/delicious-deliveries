import { connect } from 'react-redux';
import navBar from '../components/navBar';

function mapStoreToProps(store) {
  return {
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer,
    shoppingCart: store.restaurantDetails.shoppingCart,
    currentOwnerId: store.login.currentOwnerId,
  };
}

export default connect(mapStoreToProps)(navBar);