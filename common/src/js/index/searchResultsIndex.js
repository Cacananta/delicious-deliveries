import { connect } from 'react-redux';
import SearchResults from '../components/searchResults';

function mapStoreToProps(store) {
  return {
    //add store here:
    //key: value
  };
}

export default connect(mapStoreToProps)(SearchResults);