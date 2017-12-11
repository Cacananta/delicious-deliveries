import { connect } from 'react-redux';
import Contact from '../components/contact';

function mapStoreToProps(store) {
  return {
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer,
    shoppingCart: store.restaurantDetails.shoppingCart,
  };
}

export default connect(mapStoreToProps)(Contact);