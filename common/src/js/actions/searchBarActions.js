import Axios from 'axios';

export const updateSearchLocation = input => {
    return (dispatch) => {
        dispatch({
            type: 'UPDATE_SEARCH_LOCATION',
        });
        Axios.get('http://localhost:3000/api/Restaurants')
        .then(res => {
            console.log(res.data);
            dispatch({
                type: 'UPDATE_SEARCH_LOCATION_SUCCESS',
                payload: [res.data, input]
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