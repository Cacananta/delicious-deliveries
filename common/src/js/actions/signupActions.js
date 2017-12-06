import axios from 'axios';

export const types = {
    ADD_USER: 'ADD_USER',
    ADD_OWNER: 'ADD_OWNER',
    OWNER_TOGGLE: 'OWNER_TOGGLE',
    UPDATE_USERNAME: 'UPDATE_USERNAME',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_NAME: 'UPDATE_NAME',
    UPDATE_PHONENUMBER: 'UPDATE_PHONENUMBER',

};

export function ownerToggle(value) {
    return {
        type: types.OWNER_TOGGLE,
        payload: {
            owner: value
        }
    };
}

export function updateUsername(username) {
    return {
        type: types.UPDATE_USERNAME,
        payload: {
            username: username
        }
    };
}

export function updatePassword(password) {
    return {
        type: types.UPDATE_PASSWORD,
        payload: {
            password: password
        }
    };
}

export function updateName(name) {
    return {
        type: types.UPDATE_NAME,
        payload: {
            name: name
        }
    };
}

export function updatePhonenumber(phonenumber) {
    return {
        type: types.UPDATE_PHONENUMBER,
        payload: {
            phone_number: phonenumber
        }
    };
}

