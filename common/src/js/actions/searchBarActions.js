import Axios from 'axios';

export const updateSearchLocation = input => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_SEARCH_LOCATION',
        });
        Axios.get('http://localhost:3000/api/Restaurants')
        .then(res => {
            dispatch({
                type: 'UPDATE_SEARCH_LOCATION_SUCCESS',
                payload: res.data
            })
        })
        .catch(err => {
            dispatch({
                type: 'UPDATE_SEARCH_LOCATION_REJECTED',
                payload: err
            })
        })
    }
}

export const captureLocation = input => {
    return {
        type: 'CAPTURE_LOCATION',
        payload: input
    }
}