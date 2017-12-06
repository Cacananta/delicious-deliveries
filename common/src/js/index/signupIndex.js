import { connect } from 'react-redux';
import SignUp from '../components/signup';

function mapStoreToProps(store) {
  return {
    //add store here:
    //key: value
  };
}

export default connect(mapStoreToProps)(SignUp);