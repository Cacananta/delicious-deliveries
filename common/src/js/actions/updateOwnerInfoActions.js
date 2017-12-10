import axios from 'axios';

export const types = {
    CHANGE_USERNAME: 'CHANGE_USERNAME',
    CHANGE_PASSWORD: 'CHANGE_PASSWORD',
    CHANGE_NAME: 'CHANGE_NAME',
    CHANGE_PHONENUMBER: 'CHANGE_PHONENUMBER',
    CHANGE_OWNER_INFO: 'CHANGE_OWNER_INFO',
};

export function changeOwnerInfo(name, email, password, phone_number, currentOwnerId) {
    console.log(name, email, password, phone_number, currentOwnerId);
    
return (dispatch) => {
 axios.put(`http://localhost:3000/api/Owners/${currentOwnerId}`, {name, email, password, phone_number})
    .then(results => {
        dispatch({
            type: types.CHANGE_OWNER_INFO,
            payload: results.data
        })
    })
    .catch(err => console.log(err))


}
}
export function changeUsername(username) {
    return {
        type: types.CHANGE_USERNAME,
        payload: username
    };
}

export function changePassword(password) {
    return {
        type: types.CHANGE_PASSWORD,
        payload: password
    };
}

export function changeName(name) {
    return {
        type: types.CHANGE_NAME,
        payload: name
    };
}

export function changePhonenumber(phonenumber) {
    return {
        type: types.CHANGE_PHONENUMBER,
        payload: phonenumber
    };
}
