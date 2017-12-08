import { types } from '../actions/loginActions';

const INITIAL_STATE = {
    email: 'bob@bob.com',
    password: 'bob0',
    owner: 'false',
    activeOwner: false,
    activeCustomer: false,
    currentOwnerId: '5a2962fddbe71f1da847d79e',
    currentCustomerId: ''
};

export default function LoginReducer(state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        case types.LOGIN_OWNER: {
            if (payload) {
                window.location.href= `http://localhost:3000/#/owner/${payload.userId}`;
                return {
                    ...state,
                    currentOwnerId: payload.userId,
                    activeOwner: true
                };
            } else {
                return {
                    ...state,
                    password: ''
                };
            }
            break;
        }
        case types.LOGIN_CUSTOMER: {
            if (payload) {
                window.history.go(-1);
                return {
                    ...state,
                    currentCustomerId: payload.userId,
                    activeCustomer: true
                }
            } else {
                return {
                    ...state,
                    password: ''
                };
            }
            break;
        }

        case (types.OWNER_TOGGLE_LOGIN): {
            return {
                ...state,
                owner: payload
            };
            break;
        }

        case (types.UPDATE_USERNAME_LOGIN): {
            return {
                ...state,
                email: payload
            };
            break;
        }

        case (types.UPDATE_PASSWORD_LOGIN): {
            return {
                ...state,
                password: payload
            };
            break;
        }
        default: {
            return state;
        }
    }
};