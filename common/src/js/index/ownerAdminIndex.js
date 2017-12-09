import { connect } from 'react-redux';
import OwnerAdmin from '../components/ownerAdmin';

function mapStoreToProps(store) {
  return {
    activeOwner: store.login.activeOwner,
    currentOwnerId: store.login.currentOwnerId,
    ownerRestaurants: store.ownerRestaurants
  };
}

export default connect(mapStoreToProps)(OwnerAdmin);