import Axios from 'axios';

export const getOwnerRestaurants = ownerId => {
    return (dispatch) => {
        dispatch({
            type: 'GET_OWNER_RESTAURANTS',
        });
        Axios.get('http://localhost:3000/api/Owners/' + ownerId + '/restaurants')
        .then(res => {
            console.log(res.data);
            dispatch({
                type: 'GET_OWNER_RESTAURANTS_SUCCESS',
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'GET_OWNER_RESTAURANTS_REJECTED',
                payload: err
            })
        })
    }
}