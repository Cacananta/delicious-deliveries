import { connect } from 'react-redux';
import UserLogin from '../components/userlogin';

function mapStoreToProps(store) {
  return {
    //add store here:
    //key: value
  };
}

export default connect(mapStoreToProps)(UserLogin);