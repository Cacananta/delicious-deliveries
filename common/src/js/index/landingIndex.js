import { connect } from 'react-redux';
import Landing from '../components/landing';

function mapStoreToProps(store) {
  return {
    //add store here:
    //key: value
  };
}

export default connect(mapStoreToProps)(Landing);