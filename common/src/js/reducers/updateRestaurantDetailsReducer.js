import { types } from '../actions/updateRestaurantDetailsAction';

const INITIAL_STATE = {
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    food_type: '',
    phone_number: 0,
    restaurantId: '',
    ownerId: '',
    ownerRestaurants: [],
    selectedRestaurant: {}
};

export default function UpdateRestaurantReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.UPDATE_RESTAURANT: {
            console.log(12, payload);
            window.location.href= `http://localhost:3000/#/owner/${payload.ownerId}`;
            if (payload) {
                return {
                    ...state,
                    name: payload.name,
                    address1: payload.address1,
                    address2: payload.address2,
                    city: payload.city,
                    state: payload.state,
                    zip: payload.zip,
                    image: payload.image,
                    food_type: payload.food_type,
                    phone_number: payload.phone_number
                };
            } else {
                return {
                    ...state
                };
            }
        }

        case 'GET_OWNER_RESTAURANTS_SUCCESS': {
            return {
              ...state,
              ownerRestaurants: payload
            };
        }
          
        case 'GET_OWNER_RESTAURANTS_REJECTED': {
            return {
              ...state,
              err: payload
            };
        }

        case 'PICK_RESTAURANT': {
            return {
              ...state,
              name: payload.name,
              address1: payload.address1,
              address2: payload.address2,
              city: payload.city,
              state: payload.state,
              zip: payload.zip,
              image: payload.image,
              food_type: payload.food_type,
              phone_number: payload.phone_number,
              restaurantId: payload.id,
              ownerId: payload.ownerId,
              selectedRestaurant: payload
            };
        }

        case (types.FOOD_TYPE): {
            return {
                ...state,
                food_type: payload,
            };
        }

        case (types.UPDATE_RESTAURANT_NAME): {
            return {
                ...state,
                name: payload,
            };
        }

        case (types.UPDATE_ADDRESS1): {
            return {
                ...state,
                address1: payload,
            };
        }

        case (types.UPDATE_ADDRESS2): {
            return {
                ...state,
                address2: payload
            };
        }

        case (types.UPDATE_CITY): {
            return {
                ...state,
                city: payload
            };
        }

        case (types.UPDATE_STATE): {
            return {
                ...state,
                state: payload
            };
        }

        case (types.UPDATE_ZIP): {
            return {
                ...state,
                zip: payload
            };
        }

        case (types.UPDATE_IMAGE): {
            return {
                ...state,
                image: payload
            };
        }

        case (types.UPDATE_PHONE_NUMBER): {
            return {
                ...state,
                phone_number: payload
            };
        }

        default: {
            return state;
        }
    }
};