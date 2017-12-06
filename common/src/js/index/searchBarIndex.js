import { connect } from 'react-redux';
import Searchbar from '../components/Searchbar';

function mapStoreToProps(store) {
  return {
    location: store.initialSearch.location
  };
}

export default connect(mapStoreToProps)(Searchbar);
