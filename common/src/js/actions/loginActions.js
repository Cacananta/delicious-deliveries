import axios from 'axios';

export const types = {
    OWNER_TOGGLE_LOGIN: 'OWNER_TOGGLE_LOGIN',
    UPDATE_USERNAME_LOGIN: 'UPDATE_USERNAME_LOGIN',
    UPDATE_PASSWORD_LOGIN: 'UPDATE_PASSWORD_LOGIN',
    LOGIN_OWNER: 'LOGIN_OWNER',
    LOGIN_CUSTOMER: 'LOGIN_CUSTOMER'
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

export function loginAuth(email, password, owner) {
    console.log('http://localhost:3000/api/Owners', {
        owner,
        email,
        password
    });
    return (dispatch) => {
        if (owner == "true") {
            axios.post('http://localhost:3000/api/Owners/login', { email, password })
                .then(results => {
                    document.cookie = 'ACCESS_TOKEN=' + results.data.id;
                    console.log(results.data);
                    dispatch({
                        type: types.LOGIN_OWNER,
                        payload: results.data
                    })
                })
                .catch(err => { console.log(err); alert('Invalid Sign In') });
        } else {
            axios.post('http://localhost:3000/api/Customers/login', { email, password })
                .then(results => {
                    document.cookie = 'ACCESS_TOKEN=' + results.data.id;
                    console.log(document.cookie);
                    dispatch({
                        type: types.LOGIN_CUSTOMER,
                        payload: results.data
                    })
                })
                .catch(err => { console.log(err); alert('Invalid Sign In') });
        }
    }
}

// export function loginAuth(palceholder) {
//     return {
//         type: 'VERIFY_USER',
//         payload: placehoder
//     }
// }