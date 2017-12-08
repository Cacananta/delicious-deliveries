import { connect } from 'react-redux';
import Landing from '../components/landing';

function mapStoreToProps(store) {
  return {
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer
  };
}

export default connect(mapStoreToProps)(Landing);