import { connect } from 'react-redux';
import Searchbar from '../components/Searchbar';

function mapStoreToProps(store) {
  return {
    restaurants: store.initialSearch.restaurants,
    location: store.initialSearch.location,
    activeOwner: store.login.activeOwner,
    activeCustomer: store.login.activeCustomer
  };
}

export default connect(mapStoreToProps)(Searchbar);