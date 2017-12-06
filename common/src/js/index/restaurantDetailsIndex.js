import { connect } from 'react-redux';
import RestaurantDetails from '../components/restaurantDetails';

function mapStoreToProps(store) {
  return {
    //add store here:
    //key: value
  };
}

export default connect(mapStoreToProps)(RestaurantDetails);