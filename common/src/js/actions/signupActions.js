import axios from 'axios';

export const types = {
    ADD_OWNER: 'ADD_OWNER',
    ADD_CUSTOMER: 'ADD_CUSTOMER',
    OWNER_TOGGLE: 'OWNER_TOGGLE',
    UPDATE_USERNAME: 'UPDATE_USERNAME',
    UPDATE_PASSWORD: 'UPDATE_PASSWORD',
    UPDATE_NAME: 'UPDATE_NAME',
    UPDATE_PHONENUMBER: 'UPDATE_PHONENUMBER',

};

export function addNewClient(owner, name, email, password, phone_number) {
    console.log('http://localhost:3000/api/Owners', {
        owner,
        name,
        email,
        password,
        phone_number
    });
    return (dispatch) => {
        if (owner == "true") {
            dispatch({
                type: types.ADD_OWNER,
                payload: axios.post('http://localhost:3000/api/Owners', {name, email, password, phone_number})
                .then(results => {return results.data})
                .catch(err => console.log(err))
            })
        } else {
            dispatch({
                type: types.ADD_CUSTOMER,
                payload: axios.post('http://localhost:3000/api/Customers', {name, email, password, phone_number})
                .then(results => {return results.data})
                .catch(err => console.log(err))
            })
        }
    }
}

export function ownerToggle(value) {
    return {
        type: types.OWNER_TOGGLE,
        payload: value
    };
}

export function updateUsername(username) {
    return {
        type: types.UPDATE_USERNAME,
        payload: username
    };
}

export function updatePassword(password) {
    return {
        type: types.UPDATE_PASSWORD,
        payload: password
    };
}

export function updateName(name) {
    return {
        type: types.UPDATE_NAME,
        payload: name
    };
}

export function updatePhonenumber(phonenumber) {
    return {
        type: types.UPDATE_PHONENUMBER,
        payload: phonenumber
    };
}

// export function addNewClient(owner, name, email, password, phone_number) {
//     console.log('http://localhost:3000/api/Owners', {
//         owner,
//         name,
//         email,
//         password,
//         phone_number
//     });
//     // const {email, password, phone_number, owner} = formInput;
//     if (owner == true) {
//         return {
//             type: types.ADD_OWNER,
//             payload: axios.post('http://localhost:3000/api/Owners', {name, email, password, phone_number})
//                         .then(results => {return results.data})
//                         .catch(err => console.log(err))
//         };
//     } else if (owner == !true) {
//         return {
//             type: types.ADD_CUSTOMER,
//             payload: axios.post('http://localhost:3000/api/Customers', {name, email, password, phone_number})
//                           .then(results => {return results.data})
//                           .catch(err => console.log(err))
//         };
//     };
// };


