import { connect } from 'react-redux';
import Login from '../components/login';

function mapStoreToProps(store) {
  return {
    password: store.login.password,
    email: store.login.email,
    owner: store.login.owner,
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer,
    shoppingCart: store.restaurantDetails.shoppingCart,
  };
}

export default connect(mapStoreToProps)(Login);