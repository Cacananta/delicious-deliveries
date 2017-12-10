import axios from 'axios';

export const types = {
    UPDATE_RESTAURANT: 'UPDATE_RESTAURANT',
    FOOD_TYPE: 'FOOD_TYPE',
    UPDATE_RESTAURANT_NAME: 'UPDATE_RESTAURANT_NAME',
    UPDATE_ADDRESS1: 'UPDATE_ADDRESS1',
    UPDATE_ADDRESS2: 'UPDATE_ADDRESS2',
    UPDATE_CITY: 'UPDATE_CITY',
    UPDATE_STATE: 'UPDATE_STATE',
    UPDATE_ZIP: 'UPDATE_ZIP',
    UPDATE_IMAGE: 'UPDATE_IMAGE',
    UPDATE_PHONE_NUMBER: 'UPDATE_PHONE_NUMBER',

}

export function foodToggle(value) {
    return {
        type: types.FOOD_TYPE,
        payload: value
    };
}

export function updateRestaurantName(name) {
    return {
        type: types.UPDATE_RESTAURANT_NAME,
        payload: name
    };
}

export function updateAddress1(address1) {
    return {
        type: types.UPDATE_ADDRESS1,
        payload: address1
    };
}

export function updateAddress2(address2) {
    return {
        type: types.UPDATE_ADDRESS2,
        payload: address2
    };
}

export function updateCity(city) {
    return {
        type: types.UPDATE_CITY,
        payload: city
    };
}

export function updateStateInput(state) {
    return {
        type: types.UPDATE_STATE,
        payload: state
    };
}

export function updateZipCode(zip) {
    return {
        type: types.UPDATE_ZIP,
        payload: zip
    };
}

export function updateImageInput(image) {
    return {
        type: types.UPDATE_IMAGE,
        payload: image
    };
}

export function updatePhoneNumber(phone_number) {
    return {
        type: types.UPDATE_PHONE_NUMBER,
        payload: phone_number
    };
}

export function pickRestaurant(index) {
    return {
      type: 'PICK_RESTAURANT',
      payload: index
    };
}

export function updateRestaurant(food_type, name, address1, address2, city, state, zip, image, phone_number, ownerId, restaurantId) {
    console.log({food_type, name, address1, address2, city, state, zip, image, phone_number, ownerId, restaurantId});
    return (dispatch) => {
        axios.put(`http://localhost:3000/api/Owners/${ownerId}/restaurants/${restaurantId}`, {food_type, name, address1, address2, city, state, zip, image, phone_number})
            .then(results => {
                alert('Update Successful')
                console.log(results.data);
                dispatch({
                    type: types.UPDATE_RESTAURANT,
                    payload: results.data
                })
            })
            .catch(err => console.log(err));
    };              
}

export const getOwnerRestaurants = ownerId => {
    return (dispatch) => {
        dispatch({
            type: 'GET_OWNER_RESTAURANTS',
        });
        axios.get(`http://localhost:3000/api/Owners/${ownerId}/restaurants`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: 'GET_OWNER_RESTAURANTS_SUCCESS',
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'GET_OWNER_RESTAURANTS_REJECTED',
                payload: err
            })
        })
    }
}
