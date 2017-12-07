import axios from 'axios';

export const types = {
    OWNER_TOGGLE_LOGIN: 'OWNER_TOGGLE_LOGIN',
    UPDATE_USERNAME_LOGIN: 'UPDATE_USERNAME_LOGIN',
    UPDATE_PASSWORD_LOGIN: 'UPDATE_PASSWORD_LOGIN',    
}

export function ownerLoginToggle(value) {
    return {
        type: types.OWNER_TOGGLE_LOGIN,
        payload: value
    };
}

export function updateLoginUsername(username) {
    return {
        type: types.UPDATE_USERNAME_LOGIN,
        payload: username
    };
}

export function updateLoginPassword(password) {
    return {
        type: types.UPDATE_PASSWORD_LOGIN,
        payload: password
    };
}


// export function loginAuth(palceholder) {
//     return {
//         type: 'VERIFY_USER',
//         payload: placehoder
//     }
// }