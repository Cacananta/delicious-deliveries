import { types } from '../actions/updateRestaurantDetailsAction';

const INITIAL_STATE = {
    name: `Esmeralda's Tortilleria`,
    address1: '123 Broadway',
    address2: '',
    city: 'San Diego',
    state: 'CA',
    zip: '92101',
    image: 'http://cdn.partyearth.com/photos/4e9d1dc9a23a99187f9e39230082010e/tortilla-republic_s345x230.jpg?1375196583',
    food_type: 'Mexican',
    phone_number: 4567890345,
    restaurantId: '5a26d960e546bf252a0633ec',
    ownerId: '5a26d8afe546bf252a0633eb',
    ownerRestaurants: [],
    selectedRestaunt: {}
};

export default function UpdateRestaurantReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.UPDATE_RESTAURANT: {
            console.log(12, payload);
            if (payload) {
                return {
                    ...state,
                    name: payload.name,
                    address1: payload.address1,
                    address2: payload.address2,
                    city: payload.city,
                    state: payload.state,
                    zip: payload.zip,
                    image: payload.zip,
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

        case (types.FOOD_TOGGLE): {
            return {
                ...state,
                food_type: payload,
            };
        }

        case (types.ADD_RESTAURANT_NAME): {
            return {
                ...state,
                name: payload,
            };
        }

        case (types.ADD_ADDRESS1): {
            return {
                ...state,
                address1: payload,
            };
        }

        case (types.ADD_ADDRESS2): {
            return {
                ...state,
                address2: payload
            };
        }

        case (types.ADD_CITY): {
            return {
                ...state,
                city: payload
            };
        }

        case (types.ADD_STATE): {
            return {
                ...state,
                state: payload
            };
        }

        case (types.ADD_ZIP): {
            return {
                ...state,
                zip: payload
            };
        }

        case (types.ADD_IMAGE): {
            return {
                ...state,
                image: payload
            };
        }

        case (types.ADD_PHONE_NUMBER): {
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