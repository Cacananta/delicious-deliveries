import { connect } from 'react-redux';
import SearchBar from '../components/SearchBar';

function mapStoreToProps(store) {
  return {
    //add store here:
    //key: value
  };
}

export default connect(mapStoreToProps)(SearchBar);