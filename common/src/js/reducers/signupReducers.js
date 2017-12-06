import { types } from '../actions/signupActions';

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    phone_number: ''
};

export default function SignUpReducer (state = INITIAL_STATE, action) {
    const { type, payload } = action;

    switch (type) {
        case :
            return {
                ...state,
                ...action.payload
            };
        default: return state;
    }
};