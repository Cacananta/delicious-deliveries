// import axios from 'axios';

// export const types = {
//     UPDATE_USERNAME: 'UPDATE_USERNAME',
//     UPDATE_PASSWORD: 'UPDATE_PASSWORD',
//     UPDATE_NAME: 'UPDATE_NAME',
//     UPDATE_PHONENUMBER: 'UPDATE_PHONENUMBER',
// };

// export function updateOwnerInfo(owner, name, email, password, phone_number) {
// return (dispatch) => {
// dispatch({
//     type: types.UPDATE_OWNER_INFO,
//     payload: axios.put('http://localhost:3000/api/Owners', {name, email, password, phone_number})
//     .then(results => {return results.data})
//     .catch(err => console.log(err))
// })

// }
// }
// export function updateUsername(username) {
//     return {
//         type: types.UPDATE_USERNAME,
//         payload: username
//     };
// }

// export function updatePassword(password) {
//     return {
//         type: types.UPDATE_PASSWORD,
//         payload: password
//     };
// }

// export function updateName(name) {
//     return {
//         type: types.UPDATE_NAME,
//         payload: name
//     };
// }

// export function updatePhonenumber(phonenumber) {
//     return {
//         type: types.UPDATE_PHONENUMBER,
//         payload: phonenumber
//     };
// }
