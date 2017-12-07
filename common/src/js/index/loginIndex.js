import { connect } from 'react-redux';
import Login from '../components/login';

function mapStoreToProps(store) {
  return {
    password: store.login.password,
    email: store.login.email,
    owner: store.login.owner
  };
}

export default connect(mapStoreToProps)(Login);