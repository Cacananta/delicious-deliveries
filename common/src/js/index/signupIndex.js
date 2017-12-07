import { connect } from 'react-redux';
import SignUp from '../components/signup';

function mapStoreToProps(store) {
  return {
    name: store.signup.name,
    email: store.signup.email,
    password: store.signup.password,
    phone_number: store.signup.phone_number,
    owner: store.signup.owner
  };
}

export default connect(mapStoreToProps)(SignUp);