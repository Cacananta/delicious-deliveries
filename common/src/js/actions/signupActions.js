import axios from 'axios';

export const types = {
    ADD_USER: 'ADD_USER',
    ADD_OWNER: 'ADD_OWNER'
};

export function addUser(palceholder) {
    return {
        type: types.ADD_USER,
        payload: axios.put()
    }
}