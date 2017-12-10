import { types } from '../actions/addMenuItemActions';

const defaultState = {
    name: '',
    price: 0,
    description: '',
    category: ''
}

export default function addMenuItemReducer(state = defaultState, action) {
    const { type, payload } = action;
    switch (type) {
        case types.ADD_NEW_MENU_ITEM: {
            console.log(321, payload);
            if (payload) {
                return {
                    ...state,
                    name: '',
                    price: '',
                    description: '',
                    category: ''
                    // restaurant: payload.activeRestaurant
                };
            } else {
                return {
                    ...state
                };
                break;
            }
        }

        case (types.ADD_MENU_ITEM_NAME): {
            return {
                ...state,
                name: payload,
            };
            break;
        }

        case (types.ADD_MENU_ITEM_PRICE): {
            return {
                ...state,
                price: payload,
            };
            break;
        }

        case (types.ADD_MENU_ITEM_DESCRIPTION): {
            return {
                ...state,
                description: payload,
            };
            break;
        }

        case (types.ADD_MENU_ITEM_CATEGORY): {
            return {
                ...state,
                category: payload,
            };
            break;
        }

        default: {
            return state;
        }
    }
};

