import { connect } from 'react-redux';
import AddRestaurant from '../components/addRestaurant';

function mapStoreToProps(store) {
    return {
        name: store.addRestaurant.name,
        address1: store.addRestaurant.address1,
        address2: store.addRestaurant.address2,
        city: store.addRestaurant.city,
        state: store.addRestaurant.state,
        zip: store.addRestaurant.zip,
        image: store.addRestaurant.image,
        food_type: store.addRestaurant.food_type,
        phone_number: store.addRestaurant.phone_number,
        currentOwnerId: store.login.currentOwnerId,
        shoppingCart: store.restaurantDetails.shoppingCart,    
    };
}

export default connect(mapStoreToProps)(AddRestaurant);