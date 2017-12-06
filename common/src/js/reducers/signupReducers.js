import { types } from '../actions/signupActions';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    phone_number: '',
    owner: false
};

export default function SignUpReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case (types.ADD_OWNER + '_FULFILLED'): {
            if (payload) {
                return {
                    ...state,
                    name: payload.name,
                    email: payload.email,
                    password: payload.password,
                    phone_number: payload.phone_number,
                    owner: true,
                    pending: false
                };
            } else {
                return {
                    ...state,
                    owner: false
                };
            }
            break;

        }

        case (types.ADD_OWNER + '_PENDING'): {
            return {
                ...state,
                pending: true
            };
            break;
        }

        case (types.ADD_USER + 'FULLFILLED'): {
            if (payload) {
                return {
                    ...state,
                    name: payload.name,
                    email: payload.email,
                    password: payload.password,
                    phone_number: payload.phone_number,
                    owner: false,
                    pending: false
                };
            } else {
                return {
                    ...state,
                    owner: true
                };
            }
            break;
        }

        case (types.ADD_USER + '_PENDING'): {
            return {
                ...state,
                pending: true
            }
        }

    }
};