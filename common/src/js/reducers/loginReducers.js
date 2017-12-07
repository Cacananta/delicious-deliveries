import { types } from '../actions/loginActions';

const INITIAL_STATE = {
    email: '',
    password: '',
    owner: ''
};

export default function LoginReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;
    switch (type) {
        // case (types.LOGIN_AUTH + '_FULFILLED'): {
        //     if (payload) {
        //         return {
        //             ...state,
        //             email: payload.email,
        //             password: payload.password,
        //             owner: ''
        //         };
        //     } else {
        //         return {
        //             ...state,
        //             owner: ''
        //         };
        //     }
        //     break;
        // }

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