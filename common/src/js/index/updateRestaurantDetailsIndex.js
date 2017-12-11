import { connect } from 'react-redux';
import UpdateRestaurant from '../components/updateRestaurantDetails';

function mapStoreToProps(store) {
    return {
        name: store.updateRestaurant.name,
        address1: store.updateRestaurant.address1,
        address2: store.updateRestaurant.address2,
        city: store.updateRestaurant.city,
        state: store.updateRestaurant.state,
        zip: store.updateRestaurant.zip,
        image: store.updateRestaurant.image,
        food_type: store.updateRestaurant.food_type,
        phone_number: store.updateRestaurant.phone_number,
        currentOwnerId: store.login.currentOwnerId,
        ownerId: store.updateRestaurant.ownerId,
        restaurantId: store.updateRestaurant.restaurantId,
        selectedRestaurant: store.updateRestaurant.selectedRestaurant,
        activeOwner: store.login.activeOwner,
        shoppingCart: store.restaurantDetails.shoppingCart,
    };
}

export default connect(mapStoreToProps)(UpdateRestaurant);