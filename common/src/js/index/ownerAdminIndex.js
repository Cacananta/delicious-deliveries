import { connect } from 'react-redux';
import OwnerAdmin from '../components/ownerAdmin';

function mapStoreToProps(store) {
  return {
    activeOwner: store.login.activeOwner
  };
}

export default connect(mapStoreToProps)(OwnerAdmin);