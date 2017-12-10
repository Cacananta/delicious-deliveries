import { types } from '../actions/loginActions';

const INITIAL_STATE = {
    email: 'point@gmail.com',
    password: 'abc1',
    owner: 'true',
    activeOwner: false,
    activeCustomer: false,
    currentOwnerId: '',
    currentCustomerId: '',
    authToken: ''
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
                    activeOwner: true,
                    authToken: payload.id
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
                    activeCustomer: true,
                    authToken: payload.id
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