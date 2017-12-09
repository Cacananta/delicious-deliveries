import { types } from '../actions/addRestaurantActions';

const INITIAL_STATE = {
    name: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    image: '',
    food_type: '',
    phone_number: ''
};

export default function AddRestaurantReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_NEW_RESTAURANT: {
            console.log(1,payload)
            if (payload) {
                return {
                    ...state,
                    name: '',
                    address1: '',
                    address2: '',
                    city: '',
                    state: '',
                    zip: '',
                    image: '',
                    food_type: '',
                    phone_number: ''
                };
            } else {
                return {
                    ...state
                };
                break;
            }
        }

        case (types.FOOD_TOGGLE): {
            return {
                ...state,
                food_type: payload,
            };
            break;
        }

        case (types.ADD_RESTAURANT_NAME): {
            return {
                ...state,
                name: payload,
            };
            break;
        }

        case (types.ADD_ADDRESS1): {
            return {
                ...state,
                address1: payload,
            };
            break;
        }

        case (types.ADD_ADDRESS2): {
            return {
                ...state,
                address2: payload
            };
            break;
        }

        case (types.ADD_CITY): {
            return {
                ...state,
                city: payload
            };
            break;
        }

        case (types.ADD_STATE): {
            return {
                ...state,
                state: payload
            };
            break;
        }

        case (types.ADD_ZIP): {
            return {
                ...state,
                zip: payload
            };
            break;
        }

        case (types.ADD_IMAGE): {
            return {
                ...state,
                image: payload
            };
            break;
        }

        case (types.ADD_PHONE_NUMBER): {
            return {
                ...state,
                phone_number: payload
            };
            break;
        }

        default: {
            return state;
        }
    }
};