import { connect } from 'react-redux';
import OwnerLogin from '../components/ownerlogin';

function mapStoreToProps(store) {
  return {
    //add store here:
    //key: value
  };
}

export default connect(mapStoreToProps)(OwnerLogin);