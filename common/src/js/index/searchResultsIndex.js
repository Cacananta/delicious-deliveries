import { connect } from 'react-redux';
import SearchResults from '../components/searchResults';

function mapStoreToProps(store) {
  return {
    restaurants: store.initialSearch.restaurants,
    location: store.initialSearch.location
  };
}

export default connect(mapStoreToProps)(SearchResults);