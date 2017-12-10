import Axios from 'axios';

export const types = {
    UPDATE_SEARCH_LOCATION: 'UPDATE_SEARCH_LOCATION',  
    UPDATE_SEARCH_LOCATION_SUCCESS: 'UPDATE_SEARCH_LOCATION_SUCCESS',
    CAPTURE_LOCATION: 'CAPTURE_LOCATION',
}

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

export function captureLocation(location) {
    return {
        type: types.CAPTURE_LOCATION,
        payload: location
    };
}
